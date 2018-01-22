import { DomManipulator } from '../../util';

export class EditDesignModal {

  constructor() {
    this.editElementModal = new DomManipulator().getElementById('js-edit-element-modal');
    this.isShowingEditModal = false;
    this.selectedElement;
    this.hide();
  }

  editInputGroup() {

  }

  editCheckoboxGroup() {

  }

  editButtonGroup() {

  }

  listenStyleChanges(editElementModal, selectedElement) {

      console.log(selectedElement.className.includes('input-label-group'));
    


    new DomManipulator().getElementById('js-background-color')
      .addEventListener('input', (ev) => {
        const color = ev.target.value;
        
        
      });
  }

  show(selectedElement) {
    this.editElementModal.style.visibility = 'visible';
    this.editElementModal.style.top = (`${selectedElement.offsetTop * 2}px`)
    this.selectedElement = selectedElement;
    this.listenStyleChanges(this.editElementModal, selectedElement);
  }

  hide() {

    this.editElementModal.style.visibility = 'hidden';
    this.editElementModal.style.top = (`${0}px`)

  }

  toogle(selectedElement) {

    if (this.isShowingEditModal) {
      this.hide();
    } else {
      this.show(selectedElement);
    }

    this.isShowingEditModal = !this.isShowingEditModal;
  }

}