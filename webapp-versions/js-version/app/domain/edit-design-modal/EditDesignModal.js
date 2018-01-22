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



  show(selectedElement) {
    this.editElementModal.style.visibility = 'visible';
    this.editElementModal.style.top = (`${selectedElement.offsetTop * 2}px`)
    this.selectedElement = selectedElement;


    this.listenStyleChanges(this.editElementModal, selectedElement);
  }


  listenStyleChanges(editElementModal, selectedElement) {
    const elmentToEditType = selectedElement.getAttribute('data-type');
    this.editElementModal.innerHTML = this.templateEditorKindChooser(elmentToEditType);
    
    
    this.document.getElementById('js-button-editor-form', (ev)=>{
      console.log(ev)
    });
  
  
  
  }


  templateEditorKindChooser(dataType) {
    const editorKinds = {
      'button-group': this.buttonEditorTemplate()
    }
    //input-group
    // checkbox-group
    //button group

    return editorKinds[dataType];
  }

  buttonUpdateElement(){

  }

  buttonEditorTemplate() {

    return `
    <div>
      <header class="edit-element-modal__header">
        <h2>Edit Design</h2>
      </header>
      <!-- EDIT INPUT GROUP -->
      
      <div class="input-group-editor">
      <form id="js-button-editor-form">
        <section class="edit-element-modal__main">
          <div>
            <label>Text</label>
            <input type="text">
          </div>
          <div class="background-color">
            <label>Font Size</label>
            <input type="number">
          </div>
          <div class="background-color">
            <label>Width</label>
            <input type="range">
          </div>
          <div class="background-color">
            <label>Height</label>
            <input type="range">
          </div>
        </section>
        </form>
      </div>
    </div>
    `;
  }


  template() {
    return `
    <div>
      <header class="edit-element-modal__header">
        <h2>Edit Design</h2>
      </header>
      <!-- EDIT INPUT GROUP -->
      <div class="input-group-editor">
        <section class="edit-element-modal__label">
          <h2>Label</h2>
          <div>
            <label>Text</label>
            <input type="text">
          </div>
          <div>
            <label>Font Size</label>
            <input type="number">
          </div>
          <div>
            <label>Font Color</label>
            <input type="color">
          </div>
        </section>
        <br>
        <section class="edit-element-modal__main">
          <h2>Input</h2>
          <div class="background-color">
            <label for="">Backgound Color</label>
            <input id="js-background-color" type="color">
          </div>
          <div class="background-color">
            <label>Font Size</label>
            <input type="number">
          </div>
          <div class="background-color">
            <label>Width</label>
            <input type="range">
          </div>
          <div class="background-color">
            <label>Height</label>
            <input type="range">
          </div>

        </section>
      </div>
    </div>
    `;
  }

}