var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
event.dataTransfer.setData('text/plain',null)
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;

    onDragHandle(event);
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "purple";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }

    console.log(elDragPositionX)
  
}, false);





let elDragPositionX;
let elDragPositionY;
function onDragHandle(event) {
  event.dataTransfer.setData('text/plain', event.target.id)

  const data = event.dataTransfer.getData('text');
  const draggedElement = document.getElementById(data);

  elDragPositionX = event.clientX - draggedElement.offsetLeft;
  elDragPositionY = event.clientY - draggedElement.offsetTop;

}



function onDropHandle(event) {
  
  event.preventDefault();
  const draggedElementId = event.dataTransfer.getData('text');
  const draggedElement = document.getElementById(draggedElementId);

  if (event.target.id !== draggedElementId) {
    event.target.appendChild(document.getElementById(draggedElementId));
  }

  draggedElement.style.position = 'absolute';

  draggedElement.style.left = `${event.clientX - elDragPositionX}px`;
  draggedElement.style.top = `${event.clientY - elDragPositionY}px`;
}