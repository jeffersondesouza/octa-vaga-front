export class DropZone {

  constructor() {
    this.dropZoneId = 'dropzone';
    this.elDragPositionX;
    this.elDragPositionY;
    this.init();
  }

  onDropHandle(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(draggedElementId);


    event.target.style.position = 'relative'
    draggedElement.style.position = 'absolute';
    draggedElement.style.left = `${event.clientX - this.elDragPositionX}px`;
    draggedElement.style.top = `${event.clientY - this.elDragPositionY}px`;

    console.log(event.clientX, this.elDragPositionX)

    if (event.target.id === this.dropZoneId) {
      event.target.appendChild(document.getElementById(draggedElementId));
    } else {
      document.getElementById(this.dropZoneId).appendChild(document.getElementById(draggedElementId));
    }
  }


  onDragHandle(event) {
    event.dataTransfer.setData('text/plain', event.target.id)

    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);

    if (event.target.parentNode.id === this.dropZoneId) {

      this.elDragPositionX = event.clientX - draggedElement.offsetLeft;
      this.elDragPositionY = event.clientY - draggedElement.offsetTop;

    } else {
      const dropzone = document.getElementById(this.dropZoneId);

      this.elDragPositionX = event.clientX - draggedElement.offsetLeft + dropzone.offsetLeft;
      this.elDragPositionY = event.clientY - draggedElement.offsetTop + dropzone.offsetTop;
    }


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

  init() {


    this.onDragStart();
    this.onDrop();
    this.onDragover();

    /* events fired on the drag and drop targets */




  }
}