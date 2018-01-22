import { DomManipulator } from '../../util';

export class EditDesignModal {

  constructor() {
    this.editElementModal = new DomManipulator().getElementById('js-edit-element-modal');
    this.hide();
  }

  show(selectedElement) {
    this.editElementModal.style.visibility = 'visible';

  }

  hide() {
    this.editElementModal.style.visibility = 'hidden';

  }

}