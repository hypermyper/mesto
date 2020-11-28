export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOnOverlayClick = this._closeOnOverlayClick.bind(this);
  }
  open() {
    this._popupElement.classList.add('overlay_opened');
    document.body.addEventListener('keydown', this._handleEscClose);
    document.body.addEventListener('click', this._closeOnOverlayClick);
  }
  close() {
    this._popupElement.classList.remove('overlay_opened');
    document.body.removeEventListener('keydown', this._handleEscClose);
    document.body.removeEventListener('click', this._closeOnOverlayClick);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    const closeButton = this._popupElement.querySelector('.form__close-icon');
    closeButton.addEventListener('click', () => {
      this.close();
   });
  }
  _closeOnOverlayClick(evt) {
    if (evt.target.classList.contains('overlay_opened')) {
      this.close();
    }
  }
}
