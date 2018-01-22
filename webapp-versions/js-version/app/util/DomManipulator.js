export class DomManipulator {


  getElementById(elementId) {
    return document.getElementById(elementId)
  }

  appendElement(parentElement, childElement) {
    parentElement.appendChild(childElement);
  }

}