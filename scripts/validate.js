const showError = (input, inputErrorClass) => {
  const error = document.querySelector(`#${input.id}-error`);
  input.classList.add(inputErrorClass);
  error.textContent = input.validationMessage;
}

const hideError = (input, inputErrorClass) => {
  const error = document.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  error.textContent = '';
}

const setButtonState = (buttonElem, buttonState, inactiveButtonClass) => {
  buttonElem.disabled = buttonState;
  if (buttonState === false) {
    buttonElem.classList.remove(inactiveButtonClass);
  } else {
    buttonElem.classList.add(inactiveButtonClass);
  }
}

const toggleButtonState = (buttonElem, isActive, inactiveButtonClass) => {
  if (isActive) {
    setButtonState(buttonElem, false, inactiveButtonClass);
  } else {
    setButtonState(buttonElem, true, inactiveButtonClass);
  }
}

const checkInputValidity = (input, inputErrorClass) => {
  if (!input.validity.valid) {
    showError(input, inputErrorClass);
  } else {
    hideError(input, inputErrorClass);
  }
}

const setEventListeners = (formElement, buttonElement, {inputSelector, inactiveButtonClass, inputErrorClass}) => {
  const inputs = Array.from(formElement.querySelectorAll(inputSelector));

  inputs.forEach(input => {
     input.addEventListener('input', (evt) => {
        checkInputValidity(evt.target, inputErrorClass);
        const isAllValid = formElement.checkValidity();
        toggleButtonState(buttonElement, isAllValid, inactiveButtonClass);
     });
  });
}

const enableValidation = ({formSelector, buttonSelector, ...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      const buttonElement = form.querySelector(buttonSelector);
      setEventListeners(form, buttonElement, rest);
  });
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_invalid',
  inputErrorClass: 'form__input_type_error'
});
