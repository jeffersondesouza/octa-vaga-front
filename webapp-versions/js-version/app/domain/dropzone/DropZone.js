import { DomManipulator } from '../../util';

export class DropZone {

  constructor(dropZoneId) {
    this.dropZoneId = dropZoneId || 'dropzone';
    this.elDragPositionX;
    this.elDragPositionY;

    this.domManipulator = new DomManipulator();

    this.init();
  }


  init() {

    this.dropzone = this.domManipulator.getElementById(this.dropZoneId);

    /* events fired on by drag and drop targets */
    this.onDragStart();
    this.onDrop();
    this.onDragover();

  }

  onDragStart() {
    document.addEventListener("dragstart", event => this.onDragHandle(event));
  }

  onDrop() {
    document.addEventListener("drop", event => this.onDropHandle(event));
  }

  onDragover() {
    document.addEventListener("dragover", event => event.preventDefault());
  }



  appendDraggedElementToDropElement(dropElement, draggedElement) {
    this.domManipulator.appendElement(dropElement, draggedElement);
  }

  isMainDropZoneId(dropElementId, dropZoneId) {
    return dropElementId === dropZoneId;
  }

  setDraggingData(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    const draggedElementId = event.dataTransfer.getData('text');
    const draggedElement = this.domManipulator.getElementById(draggedElementId);

    return {
      draggedElementId,
      draggedElement
    }
  }


  // Setting the dropped elemement Axis position, basedo on drag position and element dimensions
  resetElementPosition(event, draggedElement) {
    this.elDragPositionX = event.clientX - draggedElement.offsetLeft;
    this.elDragPositionY = event.clientY - draggedElement.offsetTop;
  }

  // Setting the dropped elemement Axis position, basedo on drag position and element dimensions
  // It is need in cases th userdrop element inside it self
  resetElementPositionWithDropZoneDelta(event, draggedElement) {

    this.elDragPositionX = event.clientX - draggedElement.offsetLeft + this.dropzone.offsetLeft;
    this.elDragPositionY = event.clientY - draggedElement.offsetTop + this.dropzone.offsetTop;

  }


  onDragHandle(event) {
    const { draggedElementId, draggedElement } = this.setDraggingData(event);

    if (this.isMainDropZoneId(event.target.parentNode.id, this.dropZoneId)) {
      this.resetElementPosition(event, draggedElement);
    } else {
      this.resetElementPositionWithDropZoneDelta(event, draggedElement);
    }

  }



  setDraggedElementPosition(draggedElement) {
    draggedElement.style.position = 'absolute';
    draggedElement.style.left = `${event.clientX - this.elDragPositionX}px`;
    draggedElement.style.top = `${event.clientY - this.elDragPositionY}px`;
  }

  setDroppingElementPosition() {
    event.target.style.position = 'relative'
  }




  onDropHandle(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    const { draggedElementId, draggedElement } = this.setDraggingData(event);

    this.setDroppingElementPosition();
    this.setDraggedElementPosition(draggedElement);

    if (this.isMainDropZoneId(event.target.id, this.dropZoneId)) {
      this.appendDraggedElementToDropElement(event.target, this.domManipulator.getElementById(draggedElementId));

    } else {
      this.appendDraggedElementToDropElement(this.dropzone, this.domManipulator.getElementById(draggedElementId));
    }
  }



}