import Popup from "./Popup.js";
export default class PopupWithDeleteCard extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popupElement.querySelector('.form');
  }
  setEventListeners() {
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
     this._handleSubmitForm(this._cardId);

    });
    super.setEventListeners();
  }
  open (data) {
    super.open();
    this._cardId = data;
    //console.log(data.cardId);
  }
  close() {
    super.close();
    this._form.reset();
  }
}
