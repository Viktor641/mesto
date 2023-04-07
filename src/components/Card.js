export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._link;
    this._element.querySelector('.card__paragraph').textContent = this._name;

    return this._element;
  }

  _likeCard(evt) {
    evt.target.classList.toggle('card__like_active');
  }

  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._element.querySelector('.card__delete').addEventListener('click', this._deleteCard)

    this._element.querySelector('.card__like').addEventListener('click', this._likeCard);
  }
}