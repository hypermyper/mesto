import './index.css';

import { initialCards,
  buttonEditProfile,
  overlayEditProfile,
  nameInput,
  jobInput,
  profileInfo,
  profileDescription,
  overlayImagePopup,
  buttonNewPlace,
  overlayNewPlace,
  elementsClass,
  validationConfig
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const user = new UserInfo({
  profileInfo,
  profileDescription
});

const popupFullImage = new PopupWithImage(overlayImagePopup);
const formEditProfileValidate = new FormValidator(validationConfig, '.form_edit-profile');
const formNewPlaceValidate = new FormValidator(validationConfig, '.form_new-place');

const formEditProfileClass = new PopupWithForm({
  popupSelector: overlayEditProfile,
  handleSubmitForm: (input) => {
      user.setUserInfo(input['input-name'], input['input-description']);
      formEditProfileClass.close();
  }
});

const formNewPlaceClass = new PopupWithForm({
  popupSelector: overlayNewPlace,
  handleSubmitForm: (input) => {
    const card = new Card({
      name: input['input-new-place'],
      link: input['input-image-link']
    },
      '.template',
      {
        handleCardClick: (name, link) => {
          popupFullImage.open(name, link);
        }
      });

    const cardElement = card.generateCard();
    cardList.addNewItem(cardElement);

    formNewPlaceClass.close();
  }
})

const cardList = new Section({
	data: initialCards,
	renderer: (item) => {
    const card = new Card(
      item,
      '.template',
      {
        handleCardClick: (name, link) => {
          popupFullImage.open(name, link);
        }
      });
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
	  }
  }, elementsClass
);

buttonEditProfile.addEventListener('click', () => {
  formEditProfileClass.open();
  nameInput.value = user.getUserInfo().profileInfo;
  jobInput.value = user.getUserInfo().profileDescription;;
  formEditProfileValidate.prepareFormOnOpen();
});

buttonNewPlace.addEventListener('click', () => {
  formNewPlaceClass.open();
  formNewPlaceValidate.prepareFormOnOpen();
});

formEditProfileValidate.enableValidation();
formNewPlaceValidate.enableValidation();

formNewPlaceClass.setEventListeners();
formEditProfileClass.setEventListeners();
popupFullImage.setEventListeners();
cardList.renderItems();
