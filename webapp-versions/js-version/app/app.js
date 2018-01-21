let elDragPositionX;
let elDragPositionY;

var dragged;



document.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData('text/plain', null)
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent

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

  elDragPositionX = event.clientX - draggedElement.offsetLeft;
  elDragPositionY = event.clientY - draggedElement.offsetTop;

}



function onDropHandle(event) {

  event.preventDefault();
  const draggedElementId = event.dataTransfer.getData('text');
  const draggedElement = document.getElementById(draggedElementId);

  console.log(event.target.id, draggedElementId);
  if (event.target.id === 'dropzone') {
    event.target.appendChild(document.getElementById(draggedElementId));
  } else {
    document.getElementById('dropzone').appendChild(document.getElementById(draggedElementId));
  }

  draggedElement.style.position = 'absolute';

  draggedElement.style.left = `${event.clientX - elDragPositionX}px`;
  draggedElement.style.top = `${event.clientY - elDragPositionY}px`;
}