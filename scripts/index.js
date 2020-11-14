import { initialCards } from './initialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_invalid',
  inputErrorClass: 'form__input_type_error'
};

const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const overlayEditProfile = document.querySelector('.overlay_edit-profile');
const formEditProfile = document.querySelector('.form_edit-profile');
const buttonClosePopupEditProfile = overlayEditProfile.querySelector('.form__close-icon');
const nameInput = formEditProfile.querySelector('.form__input_name');
const jobInput = formEditProfile.querySelector('.form__input_description');
const profileInfo = document.querySelector('.profile-info__title');
const profileDescription = document.querySelector('.profile-info__description');
const overlayImagePopup = document.querySelector('.overlay_image-popup');
const imagePopup = document.querySelector('.overlay-figure__image');
const buttonCloseImagePopup = overlayImagePopup.querySelector('.form__close-icon');
const overlayFigureCaption = document.querySelector('.overlay-figure__caption');
const buttonNewPlace = document.querySelector('.profile__add-button');
const overlayNewPlace = document.querySelector('.overlay_new-place');
const formNewPlace = document.querySelector('.form_new-place');
const buttonClosePopupNewPlace = formNewPlace.querySelector('.form__close-icon');
const newPlaceName = formNewPlace.querySelector('.form__input_new-place');
const newPlaceImage = formNewPlace.querySelector('.form__input_image-link');
const cardsList = document.querySelector('.elements');
const formEditProfileValidate = new FormValidator(validationConfig, '.form_edit-profile');
const formNewPlaceValidate = new FormValidator(validationConfig, '.form_new-place');

const openPopup = (popup) => {
  popup.classList.add('overlay_opened');
  document.body.addEventListener('keydown', closePopupOnEsc);
}

const closePopup = (popup) => {
  popup.classList.remove('overlay_opened');
  document.body.removeEventListener('keydown', closePopupOnEsc);
}

export const openPhotoPopup = (link, name) => {
  imagePopup.src = link;
  overlayFigureCaption.innerText = name;
  openPopup(overlayImagePopup);
}

const closeOnOverlayClick = (evt, popup) => {
  if(evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(popup);
}

const openPopupEditProfile = () => {
  nameInput.value = profileInfo.textContent;
  jobInput.value = profileDescription.textContent;
  formEditProfileValidate.prepareFormOnOpen();

  openPopup(overlayEditProfile);
}

const formEditProfileSubmitHandler = (evt) => {
  evt.preventDefault();
    profileInfo.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(overlayEditProfile);
}

const openPopupNewPlace = () => {
  newPlaceName.value = '';
  newPlaceImage.value = '';
  formNewPlaceValidate.prepareFormOnOpen();
  openPopup(overlayNewPlace);
}

const formNewPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
    const card = new Card({
      name: newPlaceName.value,
      link: newPlaceImage.value
    }, '.template');
    const cardElement = card.generateCard();
    cardsList.prepend(cardElement);
    closePopup(overlayNewPlace);
}

const closePopupOnEsc = (evt) => {
  const activePopup = document.querySelector('.overlay_opened');
  if (evt.key === 'Escape') {
    closePopup(activePopup);
  }
};

const renderNewCards = () => {
  initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
    cardsList.append(cardElement);
  });
}

renderNewCards();
formEditProfileValidate.enableValidation();
formNewPlaceValidate.enableValidation();

overlayImagePopup.addEventListener('click', (evt) => closeOnOverlayClick(evt, overlayImagePopup));
buttonCloseImagePopup.addEventListener('click', () => {
  closePopup(overlayImagePopup);
});
overlayEditProfile.addEventListener('click', (evt) => closeOnOverlayClick(evt, overlayEditProfile));
buttonEditProfile.addEventListener('click', openPopupEditProfile);
buttonClosePopupEditProfile.addEventListener('click', () => {
  closePopup(overlayEditProfile);
});
formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);
overlayNewPlace.addEventListener('click', (evt) => closeOnOverlayClick(evt, overlayNewPlace));
buttonNewPlace.addEventListener('click', openPopupNewPlace);
buttonClosePopupNewPlace.addEventListener('click', () => {
  closePopup(overlayNewPlace);
});
formNewPlace.addEventListener('submit', formNewPlaceSubmitHandler);
