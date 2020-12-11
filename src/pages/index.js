import './index.css';

import {
  buttonEditProfile,
  overlayEditProfile,
  overlayDeleteCard,
  overlayEditProfileAvatar,
  nameInput,
  jobInput,
  profileInfo,
  profileDescription,
  profileAvatar,
  profileAvatarImage,
  inputAvatarImage,
  overlayImagePopup,
  buttonNewPlace,
  overlayNewPlace,
  elementsClass,
  validationConfig
} from '../utils/constants.js';

import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDeleteCard from '../components/PopupWithDeleteCard.js';

const user = new UserInfo({
  profileInfo,
  profileDescription,
  profileAvatarImage
});

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-18/",
  headers: {
    "Content-Type": "application/json",
    authorization: "f0bb41fc-432b-4031-ac23-33a1884786fb",
  },
});

const popupFullImage = new PopupWithImage(overlayImagePopup);
const formEditProfileValidate = new FormValidator(validationConfig, '.form_edit-profile');
const formEditProfileAvatarValidate = new FormValidator(validationConfig, '.form_edit-profile-avatar');
const formNewPlaceValidate = new FormValidator(validationConfig, '.form_new-place');

function renderLoading(popup, isLoading) {
  const popupLoadingButton = document.querySelector(popup).querySelector('.form__submit-button');

  if (isLoading) {
    popupLoadingButton.textContent = 'Загрузка…';
  }
  else {
    popupLoadingButton.textContent = 'Готово';
  }
}

const formEditProfileClass = new PopupWithForm({
  popupSelector: overlayEditProfile,
  handleSubmitForm: (input) => {
    renderLoading(overlayEditProfile, true);
    //console.log(input['input-name']);
      api.updateUserInfo({
        name: input['input-name'],
        about: input['input-description']
      })
      .then(data => {
        //console.log(data);
				user.setUserInfo(data._id, data.name, data.about, data.avatar);
        formEditProfileClass.close();
        renderLoading(overlayEditProfile, false);
      });
  }
});

const formEditProfileAvatarClass = new PopupWithForm({
  popupSelector: overlayEditProfileAvatar,
  handleSubmitForm: (input) => {
    renderLoading(overlayEditProfile, true);
    api.updateAvatar(input['input-avatar'])
    .then(data => {
      user.setUserInfo(data._id, data.name, data.about, data.avatar);
      formEditProfileAvatarClass.close();
      renderLoading(overlayEditProfile, false);
    });

  }
});

const formNewPlaceClass = new PopupWithForm({
  popupSelector: overlayNewPlace,
  handleSubmitForm: (input) => {
    renderLoading(overlayNewPlace, true);
		api.addNewCard({
			name: input['input-new-place'],
			link: input['input-image-link']
		})
			.then(data => {
				const card = renderCard(data, '.template', user.getUserInfo());
        const cardElement = card.generateCard();
        cardList.addNewItem(cardElement);
        renderLoading(overlayNewPlace, false);
        formNewPlaceClass.close();
      });
  }
});

const formDeleteCard = new PopupWithDeleteCard({
	popupSelector: overlayDeleteCard,
	handleSubmitForm: ( {element, cardId} ) => {
    renderLoading(overlayDeleteCard, true);
		api.deleteCard(cardId)
			.then(() => {
        element.remove();
        renderLoading(overlayDeleteCard, false);
				formDeleteCard.close();
			})
			.catch((error) => {
				console.log(error);
			});
	}
});

const renderCard = function (data, cardSelector, userData) {
  const card = new Card(
    data,
    cardSelector,
    {
      handleCardClick: (name, link) => {
        popupFullImage.open(name, link);
      },
      handleDeleteCard: (element, cardId) => {
        formDeleteCard.open({ element, cardId });
      },
      handleLikeClick: (cardId) => {
        if(card.isCardLiked()) {
          api.deleteLikeCard(cardId)
          .then((data) => {
            card.setCardLiked(data);
          })
          .catch((error) => {
            console.log(error);
          });
        } else {
          api.addLikeCard(cardId)
          .then((data) => {
            card.setCardLiked(data);
          })
          .catch((error) => {
            console.log(error);
          });
        }
      },
      userData: userData
    });
  return card;
};

const cardList = new Section({
	data: {},
	renderer: (item, userData) => {
    const card = renderCard(item, '.template', userData);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
	}
}, elementsClass
);

const promises = [api.getCards(), api.getUserInfo()];

Promise.all(promises)
	.then(([resCardData, resUserData]) => {
    user.setUserInfo(resUserData._id, resUserData.name, resUserData.about, resUserData.avatar);
    cardList.setRenderedItems(resCardData);
    cardList.renderItems(resUserData);
	})
	.catch((error) => {
		console.log(error);
	});

buttonEditProfile.addEventListener('click', () => {
  formEditProfileClass.open();
  nameInput.value = user.getUserInfo().profileInfo;
  jobInput.value = user.getUserInfo().profileDescription;
  formEditProfileValidate.prepareFormOnOpen();
});

profileAvatar.addEventListener('click', () => {
  formEditProfileAvatarClass.open();
  inputAvatarImage.value = user.getUserInfo().profileAvatarImage.src;
  formEditProfileAvatarValidate.prepareFormOnOpen();
})

buttonNewPlace.addEventListener('click', () => {
  formNewPlaceClass.open();
  formNewPlaceValidate.prepareFormOnOpen();
});

formEditProfileValidate.enableValidation();
formEditProfileAvatarValidate.enableValidation();
formNewPlaceValidate.enableValidation();

formNewPlaceClass.setEventListeners();
formEditProfileClass.setEventListeners();
formEditProfileAvatarClass.setEventListeners();
formDeleteCard.setEventListeners();
popupFullImage.setEventListeners();

