export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems(userData) {
    this._renderItems = {};
    this._renderedItems.forEach(item => {
      this._renderer(item, userData);
    });
  }
  addItem(element) {
    this._container.append(element);
  }
  addNewItem(element) {
    this._container.prepend(element);
  }
  setRenderedItems(data) {
    this._renderedItems = data;
  }
}
