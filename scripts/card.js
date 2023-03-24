import { openPopup, popupParagraph, popupImage, popupPicture } from './index.js'


export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
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

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImage.alt = this._link;
    openPopup(popupPicture);
    popupParagraph.textContent = this._name;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup()
    })

    this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
      evt.target.closest('.card').remove();
    })

    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like_active');
    });
  }
}