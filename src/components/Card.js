export default class Card {
  constructor(data, cardSelector, {handleCardClick}) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
   }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__title').innerText = this._name;
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__group').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDeliteCard();
    });
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  _handleLikeClick() {
    this._element.querySelector('.element__group').classList.toggle('element__group_selected');
  }
  _handleDeliteCard() {
    this._element.closest(".element").remove();
  }
}
