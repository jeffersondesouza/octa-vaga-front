import { DomManipulator } from '../../util';

export class DropZone {

  constructor(dropZoneId) {
    this.dropZoneId = dropZoneId || 'dropzone';
    this.elDragPositionX;
    this.elDragPositionY;
    this.isCopyingElement = true;

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

  // Setting the dropped elemement Axis position, basedo on drag position and element dimensions
  setDraggginPositionValues(event, draggedElement) {
    this.elDragPositionX = event.clientX - draggedElement.offsetLeft;
    this.elDragPositionY = event.clientY - draggedElement.offsetTop;
  }

  // Setting the dropped elemement Axis position, basedo on drag position and element dimensions
  // It is need in cases th userdrop element inside it self
  setDragElementPositionWithDropZoneDelta(event, draggedElement) {

    this.elDragPositionX = event.clientX - draggedElement.offsetLeft + this.dropzone.offsetLeft;
    this.elDragPositionY = event.clientY - draggedElement.offsetTop + this.dropzone.offsetTop;

  }


  onDragHandle(event) {
    const { draggedElementId, draggedElement } = this.setDraggingData(event);

    if (this.isDraggingFromDropZoneArea(event.target.parentNode.id, this.dropZoneId)) {
      this.setDraggginPositionValues(event, draggedElement);
      this.isCopyingElement = false;

    } else {
      this.isCopyingElement = true;
      this.setDragElementPositionWithDropZoneDelta(event, draggedElement);
    }

  }


  getDraggindElement(draggedElementId) {
    return (this.isCopyingElement)
      ? this.domManipulator.cloneElement(draggedElementId)
      : this.domManipulator.getElementById(draggedElementId);
  }

  setDraggingData(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    const draggedElementId = event.dataTransfer.getData('text');
    const draggedElement = this.getDraggindElement(draggedElementId);

    return {
      draggedElementId,
      draggedElement
    }
  }


  setDraggedElementPosition(event, draggedElement) {
    draggedElement.style.position = 'absolute';
    if (this.isCopyingElement) {
      draggedElement.style.left = `${event.clientX - this.elDragPositionX}px`;
      draggedElement.style.top = `${event.clientY-this.dropzone.offsetTop}px`;

    } else {
      draggedElement.style.left = `${event.clientX - this.elDragPositionX}px`;
      draggedElement.style.top = `${event.clientY - this.elDragPositionY}px`;

    }
  }

  setDroppingElementPosition() {
    event.target.style.position = 'relative'
  }


  appendDraggedElementToDropElement(dropElement, draggedElement) {
    this.domManipulator.appendElement(dropElement, draggedElement);
  }

  onDropHandle(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    const { draggedElementId, draggedElement } = this.setDraggingData(event);

    this.setDroppingElementPosition();
    this.setDraggedElementPosition(event, draggedElement);

    if (this.isDraggingFromDropZoneArea(event.target.id, this.dropZoneId)) {

      // const draggedElementClone = this.domManipulator.cloneElement(draggedElementId)

      this.appendDraggedElementToDropElement(event.target, draggedElement);

      // this.appendDraggedElementToDropElement(event.target, draggedElementClone);
      return false;

    } else {
      this.appendDraggedElementToDropElement(this.dropzone, this.domManipulator.getElementById(draggedElementId));
    }


  }



}