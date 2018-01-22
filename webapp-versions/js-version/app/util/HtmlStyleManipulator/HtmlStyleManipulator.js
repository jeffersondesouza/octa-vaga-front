export class HtmlStyleManipulator {

  setElementPosition(event, draggedElement, parenteElement, elAxisPositions, isCreatingElement) {
    draggedElement.style.position = 'absolute';


    if (isCreatingElement) {
      draggedElement.style.left = `${event.clientX - elAxisPositions.axisX}px`;
      draggedElement.style.top = `${event.clientY - parenteElement.offsetTop}px`;

    } else {
      draggedElement.style.left = `${event.clientX - elAxisPositions.axisX}px`;
      draggedElement.style.top = `${event.clientY - elAxisPositions.axisY}px`;
    }
  }

}