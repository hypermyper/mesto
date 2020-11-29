import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popupElement.querySelector('.form');
  }
  _getInputValues() {
    this._inputValues = {};
    this._inputs = Array.from(this._popupElement.querySelectorAll('.form__input'));
    this._inputs.forEach(input => this._inputValues[input.name] = input.value);
    return this._inputValues;
  }
  setEventListeners() {
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
    super.setEventListeners();
  }
  close() {
    super.close();
    this._form.reset();
  }
}
