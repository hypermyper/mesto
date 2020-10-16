const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const overlayEditProfile = document.querySelector('.overlay_edit-profile');
const formEditProfile = document.querySelector('.form_edit-profile');
const buttonClosePopupEditProfile = formEditProfile.querySelector('.form__close-icon_edit-profile');

const nameInput = formEditProfile.querySelector('.form__input_name');
const jobInput = formEditProfile.querySelector('.form__input_description');
const profileInfo = document.querySelector('.profile-info__title');
const profileDescription = document.querySelector('.profile-info__description');

const overlayImagePopup = document.querySelector('.overlay_image-popup');
const imagePopup = document.querySelector('.overlay-figure__image');
const buttonCloseImagePopup = document.querySelector('.form__close-icon_image-popup');
const overlayFigureCaption = document.querySelector('.overlay-figure__caption');

const buttonNewPlace = document.querySelector('.profile__add-button');
const overlayNewPlace = document.querySelector('.overlay_new-place');
const formNewPlace = document.querySelector('.form_new-place');
const buttonClosePopupNewPlace = formNewPlace.querySelector('.form__close-icon_new-place');

const newPlaceName = formNewPlace.querySelector('.form__input_new-place');
const newPlaceImage = formNewPlace.querySelector('.form__input_image-link');

const cardsList = document.querySelector('.elements');
const template = document.querySelector('.template');

const initialCards = [
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

const popupToggle = (popup) => {
  popup.classList.toggle('overlay_opened');
}

const renderCards = () => {
  const cards = initialCards.map(card => getCard(card));
  cardsList.append(...cards);
}

const handlerRemove = (event) => {
  event.target.closest(".element").remove();
}

const getCard = (data) => {
  const card = template.content.cloneNode(true);
  const elementPhoto = card.querySelector('.element__photo');
  elementPhoto.src = data.link;
  elementPhoto.alt = data.name;
  card.querySelector('.element__title').innerText = data.name;
  const removeButton = card.querySelector('.element__trash');
  const favoriteButton = card.querySelector('.element__group');

  elementPhoto.addEventListener('click', () => {
    imagePopup.src = data.link;
    overlayFigureCaption.innerText = data.name;
    popupToggle(overlayImagePopup);
  });

  favoriteButton.addEventListener('click', () => {
    favoriteButton.classList.toggle('element__group_selected');
  });
  removeButton.addEventListener('click', handlerRemove);

  return card;
}

const closeOnOverlayClick = (event, popup) => {
  if(event.target !== event.currentTarget) {
    return;
  }
  popupToggle(popup);
}

overlayImagePopup.addEventListener('click', (event) => closeOnOverlayClick(event, overlayImagePopup));
buttonCloseImagePopup.addEventListener('click', () => {
  popupToggle(overlayImagePopup);
});

const openPopupEditProfile = () => {
  nameInput.value = profileInfo.textContent;
  jobInput.value = profileDescription.textContent;
  popupToggle(overlayEditProfile);
}

const formEditProfileSubmitHandler = (event) => {
  event.preventDefault();
    profileInfo.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupToggle(overlayEditProfile);
}

const openPopupNewPlace = () => {
  newPlaceName.value = '';
  newPlaceImage.value = '';
  popupToggle(overlayNewPlace);
}

const formNewPlaceSubmitHandler = (event) => {
  event.preventDefault();
    const item = getCard({
      name: newPlaceName.value,
      link: newPlaceImage.value
    });
    cardsList.prepend(item);
    popupToggle(overlayNewPlace);
}

overlayEditProfile.addEventListener('click', (event) => closeOnOverlayClick(event, overlayEditProfile));

buttonEditProfile.addEventListener('click', openPopupEditProfile);
buttonClosePopupEditProfile.addEventListener('click', () => {
  popupToggle(overlayEditProfile);
});
formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);

overlayNewPlace.addEventListener('click', (event) => closeOnOverlayClick(event, overlayNewPlace));

buttonNewPlace.addEventListener('click', openPopupNewPlace);
buttonClosePopupNewPlace.addEventListener('click', () => {
  popupToggle(overlayNewPlace);
});
formNewPlace.addEventListener('submit', formNewPlaceSubmitHandler);

renderCards();
