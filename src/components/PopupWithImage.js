import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupTitle = document.querySelector('.overlay-figure__caption');
    this._popupSrc = document.querySelector('.overlay-figure__image');
  }
  open(name, link) {
    super.open();
    this._popupTitle.textContent = name;
    this._popupSrc.src = link;
  }
}
