export default class Section {
  constructor({ renderer }, templateSelector) {
    this._renderer = renderer;

    this._container = document.querySelector(templateSelector);
  }

  renderItems(res) {
    res.forEach(item => this._renderer(item))
  }

  addItem(element) {
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }
}