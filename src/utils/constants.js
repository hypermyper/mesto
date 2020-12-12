export const escapeKey = 'Escape';
export const buttonEditProfile = document.querySelector('.profile-info__edit-button');
export const overlayEditProfile = '.overlay_edit-profile';
export const overlayEditProfileAvatar = '.overlay_edit-profile-avatar';
export const formEditProfile = document.querySelector('.form_edit-profile');
export const formEditProfileAvatar = document.querySelector('.form_edit-profile-avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const nameInput = formEditProfile.querySelector('.form__input_name');
export const jobInput = formEditProfile.querySelector('.form__input_description');
export const profileInfo = document.querySelector('.profile-info__title');
export const profileDescription = document.querySelector('.profile-info__description');
export const profileAvatarImage = document.querySelector('.profile__avatar-image');
export const inputAvatarImage = formEditProfileAvatar.querySelector('.form__input_avatar');
export const overlayImagePopup = '.overlay_image-popup';
export const imagePopup = document.querySelector('.overlay-figure__image');
export const buttonCloseImagePopup = '.form__close-icon';
export const overlayFigureCaption = document.querySelector('.overlay-figure__caption');
export const buttonNewPlace = document.querySelector('.profile__add-button');
export const overlayNewPlace = '.overlay_new-place';
export const formNewPlace = document.querySelector('.form_new-place');
export const buttonClosePopupNewPlace = formNewPlace.querySelector('.form__close-icon');
export const newPlaceName = formNewPlace.querySelector('.form__input_new-place');
export const newPlaceImage = formNewPlace.querySelector('.form__input_image-link');
export const overlayDeleteCard = '.overlay_delete-card';
export const elementsClass = '.elements';

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_invalid',
  inputErrorClass: 'form__input_type_error'
};
