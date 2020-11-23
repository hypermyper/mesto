import { initialCards,
  buttonEditProfile,
  overlayEditProfile,
  formEditProfile,
  buttonClosePopupEditProfile,
  nameInput,
  jobInput,
  profileInfo,
  profileDescription,
  overlayImagePopup,
  imagePopup,
  buttonCloseImagePopup,
  overlayFigureCaption,
  buttonNewPlace,
  overlayNewPlace,
  formNewPlace,
  buttonClosePopupNewPlace,
  newPlaceName,
  newPlaceImage,
  cardsList,
  validationConfig
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

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
