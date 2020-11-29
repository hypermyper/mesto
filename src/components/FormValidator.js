export default class FormValidator {
  constructor(validationConfig, formClass) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._buttonSelector = validationConfig.buttonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._formClass = formClass;
    this._form = document.querySelector(this._formClass);
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  }
  _showError(input) {
    const error = document.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = input.validationMessage;
  }
  _hideError(input) {
    const error = document.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.textContent = '';
  }
  prepareFormOnOpen() {
    this._inputs.forEach(input => {
      this._hideError(input);
    });
    this._isAllValid = false;
    this._toggleButtonState();
  }
  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }
  _toggleButtonState() {
    if (this._isAllValid) {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    }
  }
  _setEventListeners() {
    this._buttonElement = this._form.querySelector(this._buttonSelector);

    this._inputs.forEach(input => {
      input.addEventListener('input', (evt) => {
        this._checkInputValidity(evt.target);
        this._isAllValid = this._form.checkValidity();
        this._toggleButtonState();
      });
   });
  }
  enableValidation() {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
  }
}
