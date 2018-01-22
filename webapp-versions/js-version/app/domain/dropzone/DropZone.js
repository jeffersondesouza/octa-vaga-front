import { DomManipulator, HtmlStyleManipulator, bindEvent } from '../../util';
import { EditDesignModal } from '../../domain'

export class DropZone {

  constructor(dropZoneId) {
    this.dropZoneId = dropZoneId || 'dropzone';
    this.elDragPositionX;
    this.elDragPositionY;
    this.isCopyingElement = true;
    this.selectedElement;
    this.draggnalbleElements = [];


    this.domManipulator = new DomManipulator();
    this.htmlStyleManipulator = new HtmlStyleManipulator();
    this.editDesignModal = new EditDesignModal();



    this.init();
  }


  init() {

    this.dropzone = this.domManipulator.getElementById(this.dropZoneId);

    /* events fired on by drag and drop targets */
    this.onDragStart();
    this.onDrop();
    this.onDragover();

    this.dropzone.addEventListener('click', (ev) => {
      if (this.selectedElement && ev.target.parentNode.id !== 'js-item-edit-area') {
        this.editDesignModal.hide();

        this.draggnalbleElements.forEach(draggnalbleElement => {

          if (
            ev.target.id !== this.selectedElement.id
            && ev.target.parentNode.id !== this.selectedElement.id

            || draggnalbleElement.id !== this.selectedElement.id
          ) {

            [...draggnalbleElement.children]
              .filter(child => child.className === 'item-edit-menu')
              .forEach(child => {
                child.style.visibility = 'hidden'
              });
          }


        });

      } else {
        this.editDesignModal.toogle(this.selectedElement);
      }

    });

  }




  onDragStart() {
    document.addEventListener('dragstart', event => this.onDragHandle(event));
  }

  onDrop() {
    document.addEventListener('drop', event => this.onDropHandle(event));
  }

  onDragover() {
    document.addEventListener('dragover', event => event.preventDefault());
  }

  isDraggingFromDropZoneArea(dropElementId, dropZoneId) {
    return dropElementId === dropZoneId;
  }

  // Setting the dragging elemement Axis position, basedo on drag position and element dimensions
  setDraggginPositionValues(event, draggedElement) {
    this.elDragPositionX = event.clientX - draggedElement.offsetLeft;
    this.elDragPositionY = event.clientY - draggedElement.offsetTop;
  }

  // Setting the dropped elemement Axis position, basedo on drag position and element dimensions
  // It is need in cases th userdrop element inside it self
  setDragPositionConsideringDropZoneOffsets(event, draggedElement) {

    this.elDragPositionX = event.clientX - draggedElement.offsetLeft + this.dropzone.offsetLeft;
    this.elDragPositionY = event.clientY - draggedElement.offsetTop + this.dropzone.offsetTop;

  }


  onDragHandle(event) {
    const { draggedElementId, draggedElement } = this.setDraggingDataOnDrag(event);

    if (this.isDraggingFromDropZoneArea(event.target.parentNode.id, this.dropZoneId)) {
      this.isCopyingElement = false;
      this.setDraggginPositionValues(event, draggedElement);
    } else {
      this.isCopyingElement = true;
      this.setDragPositionConsideringDropZoneOffsets(event, draggedElement);
    }

  }



  setDraggingDataOnDrag(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    const draggedElementId = event.dataTransfer.getData('text');
    const draggedElement = this.domManipulator.getElementById(draggedElementId);

    return {
      draggedElementId,
      draggedElement
    }
  }


  getDraggindElementOnDrop(draggedElementId) {

    const draggedElement = (this.isCopyingElement)
      ? this.domManipulator.cloneElement(draggedElementId)
      : this.domManipulator.getElementById(draggedElementId);

    return draggedElement;
  }

  setDraggingDataOnDrop(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    const draggedElementId = event.dataTransfer.getData('text');
    const draggedElement = this.getDraggindElementOnDrop(draggedElementId);

    return {
      draggedElementId,
      draggedElement
    }
  }


  setDraggedElementPosition(event, draggedElement) {
    const elAxisPositions = {
      axisX: this.elDragPositionX,
      axisY: this.elDragPositionY
    }

    this.htmlStyleManipulator.setElementPosition(
      event,
      draggedElement,
      this.dropzone,
      elAxisPositions,
      this.isCopyingElement
    );
  }

  setDroppingElementPosition() {
    event.target.style.position = 'relative'
  }


  appendDraggedElementToDropElement(dropElement, draggedElement) {
    this.domManipulator.appendElement(dropElement, draggedElement);
  }


  listenRemoveElementClick(removeElement, draggnalbleElementId) {

    removeElement
      .addEventListener('click', ev => {
        ev.preventDefault();
        const elementToRemove = this.domManipulator.getElementById(draggnalbleElementId);
        if (elementToRemove) {
          this.dropzone.removeChild(elementToRemove);
        }
      });
  }

  listenClickElement(draggnalbleElement) {
    draggnalbleElement
      .addEventListener('click', ev => {
        ev.preventDefault();
        [...draggnalbleElement.children].map(child => child.style.visibility = 'visible');
        this.selectedElement = draggnalbleElement;
      });
  }

  resetDraggnalbleElements() {

    this.draggnalbleElements = [...this.dropzone.getElementsByClassName('draggable')];

    this.draggnalbleElements.forEach(draggnalbleElement => {
      this.listenRemoveElementClick(draggnalbleElement.children[0], draggnalbleElement.id);
      this.listenClickElement(draggnalbleElement);
    });

  }

  onDropHandle(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    const { draggedElementId, draggedElement } = this.setDraggingDataOnDrop(event);

    this.setDroppingElementPosition();
    this.setDraggedElementPosition(event, draggedElement);

    if (this.isDraggingFromDropZoneArea(event.target.id, this.dropZoneId)) {
      this.appendDraggedElementToDropElement(event.target, draggedElement);


    } else {
      this.appendDraggedElementToDropElement(this.dropzone, draggedElement);
    }

    this.selectedElement = draggedElement;
    [...draggedElement.children].map(child => child.style.visibility = 'visible');

    this.resetDraggnalbleElements();


  }



}