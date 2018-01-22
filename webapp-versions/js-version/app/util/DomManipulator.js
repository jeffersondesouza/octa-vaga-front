export class DomManipulator {


  getElementById(elementId) {
    return document.getElementById(elementId)
  }

  appendElement(parentElement, childElement) {
    parentElement.appendChild(childElement);
  }

  cloneElement(elementId) {
    const cloneElement = this.getElementById(elementId).cloneNode(true);
    cloneElement.id = Math.random();
    return cloneElement;
  }

}