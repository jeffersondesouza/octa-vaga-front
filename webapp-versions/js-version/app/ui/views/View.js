export class View {

  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }

  template(model) {
    throw new Error('You have to implement this method');
  }
}