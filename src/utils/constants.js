export const buttonEditProfile = document.querySelector('.profile-info__edit-button');
export const overlayEditProfile = '.overlay_edit-profile';
export const formEditProfile = document.querySelector('.form_edit-profile');
export const buttonClosePopupEditProfile = document.querySelector(overlayEditProfile).querySelector('.form__close-icon');
export const nameInput = formEditProfile.querySelector('.form__input_name');
export const jobInput = formEditProfile.querySelector('.form__input_description');
export const profileInfo = document.querySelector('.profile-info__title');
export const profileDescription = document.querySelector('.profile-info__description');
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
export const elementsClass = '.elements';

export const initialCards = [
  {
    name: 'Великий Новгород',
    link: 'https://images.unsplash.com/photo-1600253613497-8a39b8b4a5de?auto=format&fit=crop&w=1200&q=50'
  },
  {
    name: 'Кострома',
    link: 'https://images.unsplash.com/photo-1591288683417-219a3b9d4e05?auto=format&fit=crop&w=1200&q=50'
  },
  {
    name: 'Нижний Новгород',
    link: 'https://images.unsplash.com/photo-1569661018634-cb52239785a2?auto=format&fit=crop&w=1200&q=50'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1561398036-dc6755f9f65d?auto=format&fit=crop&w=1200&q=50'
  },
  {
    name: 'Ростов',
    link: 'https://images.unsplash.com/photo-1524214889128-d155b841834d?auto=format&fit=crop&w=1200&q=50'
  },
  {
    name: 'Рязань',
    link: 'https://images.unsplash.com/photo-1578820882065-f49c4dde71fe?auto=format&fit=crop&w=1200&q=50'
  }
];

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_invalid',
  inputErrorClass: 'form__input_type_error'
};
