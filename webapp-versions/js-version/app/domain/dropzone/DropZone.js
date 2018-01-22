export class DropZone {

  constructor(dropZoneId) {
    this.dropZoneId = dropZoneId || 'dropzone';
    this.elDragPositionX;
    this.elDragPositionY;
    this.dropzone = document.getElementById(this.dropZoneId);
    
    this.init();
  }


  setDraggingData(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    const draggedElementId = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(draggedElementId);

    return {
      draggedElementId,
      draggedElement
    }
  }

  onDragHandle(event) {
    const { draggedElementId, draggedElement } = this.setDraggingData(event);


    if (event.target.parentNode.id === this.dropZoneId) {

      this.elDragPositionX = event.clientX - draggedElement.offsetLeft;
      this.elDragPositionY = event.clientY - draggedElement.offsetTop;

    } else {

      this.elDragPositionX = event.clientX - draggedElement.offsetLeft + this.dropzone.offsetLeft;
      this.elDragPositionY = event.clientY - draggedElement.offsetTop + this.dropzone.offsetTop;
    }


  }
  onDragStart() {
    document.addEventListener("dragstart", event => this.onDragHandle(event));
  }


  setDraggedElementPosition(draggedElement) {
    draggedElement.style.position = 'absolute';
    draggedElement.style.left = `${event.clientX - this.elDragPositionX}px`;
    draggedElement.style.top = `${event.clientY - this.elDragPositionY}px`;
  }

  setDroppingElementPosition() {
    event.target.style.position = 'relative'
  }

  isDroppingOnMainDropZone(dropElementId, dropZoneId) {
    return dropElementId === dropZoneId;
  }

  getElementById(draggedElementId){
    return document.getElementById(draggedElementId)
  }

  onDropHandle(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    const { draggedElementId, draggedElement } = this.setDraggingData(event);

    this.setDroppingElementPosition();
    this.setDraggedElementPosition(draggedElement);

    if (this.isDroppingOnMainDropZone(event.target.id, this.dropZoneId)) {
      event.target.appendChild(this.getElementById(draggedElementId));
    } else {
      document.getElementById(this.dropZoneId).appendChild(this.getElementById(draggedElementId));
    }
  }


  onDrop() {
    document.addEventListener("drop", event => this.onDropHandle(event));
  }
  onDragover() {
    document.addEventListener("dragover", event => event.preventDefault());
  }

  init() {

    /* events fired on the drag and drop targets */
    this.onDragStart();
    this.onDrop();
    this.onDragover();

  }
}