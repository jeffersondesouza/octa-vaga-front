import { Pessoa } from './Pessoa';

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

