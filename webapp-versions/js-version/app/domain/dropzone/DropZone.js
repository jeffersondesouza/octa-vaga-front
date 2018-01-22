export class DropZone {

  constructor() {
    this.dropZoneId = 'dropzone';
  }


  init() {

    let elDragPositionX;
    let elDragPositionY;
    const dropZoneId = 'dropzone'

    document.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData('text/plain', null)
      onDragHandle(event);
    }, false);

    /* events fired on the drop targets */
    document.addEventListener("dragover", function (event) {
      // prevent default to allow drop
      event.preventDefault();
    }, false);


    document.addEventListener("drop", function (event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      onDropHandle(event);
    }, false);



    function onDragHandle(event) {
      event.dataTransfer.setData('text/plain', event.target.id)

      const data = event.dataTransfer.getData('text');
      const draggedElement = document.getElementById(data);

      if (event.target.parentNode.id === dropZoneId) {

        elDragPositionX = event.clientX - draggedElement.offsetLeft;
        elDragPositionY = event.clientY - draggedElement.offsetTop;

      } else {
        const dropzone = document.getElementById(dropZoneId);

        elDragPositionX = event.clientX - draggedElement.offsetLeft + dropzone.offsetLeft;
        elDragPositionY = event.clientY - draggedElement.offsetTop + dropzone.offsetTop;
      }


    }



    function onDropHandle(event) {

      event.preventDefault();
      const draggedElementId = event.dataTransfer.getData('text');
      const draggedElement = document.getElementById(draggedElementId);


      event.target.style.position = 'relative'
      draggedElement.style.position = 'absolute';
      draggedElement.style.left = `${event.clientX - elDragPositionX}px`;
      draggedElement.style.top = `${event.clientY - elDragPositionY}px`;



      if (event.target.id === dropZoneId) {
        event.target.appendChild(document.getElementById(draggedElementId));
      } else {
        document.getElementById(dropZoneId).appendChild(document.getElementById(draggedElementId));
      }



    }
  }
}