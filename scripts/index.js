let buttonOpenPopup = document.querySelector(".profile-info__edit_button");
let popup = document.querySelector(".overlay");
let formElement = document.querySelector(".form");
let buttonClosePopup = formElement.querySelector(".form__close-icon");
let nameInput = formElement.querySelector(".form__input_name");
let jobInput = formElement.querySelector(".form__input_description");
let profileInfo = document.querySelector(".profile-info__title");
let profileDescription = document.querySelector(".profile-info__description");

function popupToggle () {
  popup.classList.toggle("overlay_is-opened");
}

function openPopup () {
  nameInput.value = profileInfo.textContent;
  jobInput.value = profileDescription.textContent;
  popupToggle();
}

function closePopup (event) {
  if(event.target !== event.currentTarget) {
    return;
  }
  popupToggle();
}

function formSubmitHandler (event) {
  event.preventDefault();
    profileInfo.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupToggle();
}

popup.addEventListener("click", closePopup);
buttonOpenPopup.addEventListener("click", openPopup);
buttonClosePopup.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);
