export default class Card {
  constructor(data, cardSelector, {handleCardClick, handleDeleteCard, handleLikeClick, userData}) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeClick = handleLikeClick;
    this._userData = userData;
    this._data = data;
   }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setDeleteIcon();
    this.setCardLiked(this._data);
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name;
    this._element.querySelector('.element__title').innerText = this._name;
    return this._element;
  }
  isCardLiked() {
    const findTheId = (item) => item._id == this._userData._id;
    const isLiked = this._data.likes.some(findTheId);

    return isLiked;
  }
  setCardLiked(data) {
    this._data = data;
    this._element.querySelector('.element__like-quantity').innerText = this._data.likes.length;

    if (this.isCardLiked()) {
      this._element.querySelector('.element__like-button').classList.add('element__like-button_selected');
    } else {
      this._element.querySelector('.element__like-button').classList.remove('element__like-button_selected');
    }
  }
	_setDeleteIcon() {
    if (this._userData._id !== this._data.owner._id) {
      this._element.querySelector('.element__trash').remove();
    }
	}
  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeClick(this._data._id);
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDeleteCard(this._element, this._data._id);
    });
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
