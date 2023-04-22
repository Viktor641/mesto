export default class Card {
  constructor(cardElement, templateSelector, userId, authorData, handleActions) {
    this._card = cardElement;
    this._cardName = this._card.name;
    this._cardLink = this._card.link;
    this._templateSelector = templateSelector;

    this._userId = userId;
    this._cardId = authorData.cardId;
    this._authorId = authorData.authorId;

    this._cardZoom = handleActions.handleCardZoom;
    this._cardDelete = handleActions.handleCardDelete;
    this._putLike = handleActions.handleCardLike;
    this._removeLike = handleActions.handleCardDeleteLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  renderCardLike(card) {
    this._likeArea = card.likes;

    if (this._likeArea.length === 0) {
      this.likeCounter.textContent = '';
    } else {
      this.likeCounter.textContent = this._likeArea.length;
    }
    if (this._availabilityLike()) {
      this._cardLike.classList.add('card__like_active');
    } else {
      this._cardLike.classList.remove('card__like_active');
    }
  }

  _availabilityLike() {
    return this._likeArea.find((userLike) => userLike._id === this._userId);
  }

  _toggleLike() {
    if (this._availabilityLike()) {
      this._removeLike(this._cardId);
    } else {
      this._putLike(this._cardId);
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardLike = this._element.querySelector('.card__like');
    this._cardDeleteElement = this._element.querySelector('.card__delete');
    this.likeCounter = this._element.querySelector('.card__like-counter');


    this._cardImage.src = this._cardLink;
    this._cardImage.alt = this._cardLink;
    this._element.querySelector('.card__paragraph').textContent = this._cardName;
    this.renderCardLike(this._card);

    this._setEventListeners();
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._cardZoom(this._cardName, this._cardLink));
    this._cardLike.addEventListener('click', () => this._toggleLike());

    if (this._userId !== this._authorId) {
      this._cardDeleteElement.remove();
    } else {
      this._cardDeleteElement.addEventListener('click', () => this._cardDelete(this, this._cardId));
    }
  }
}