import { openPopup, closePopup, popupParagraph, popupImage, closeButtonPicture, popupPicture } from './index.js'


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
    this._setEventListeners();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__paragraph').textContent = this._name;
 
    return this._element;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    openPopup(popupPicture);
    popupParagraph.textContent = this._name;
  }

  _handleClosePopup() {
    closePopup(popupPicture);
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup()
    })

    this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
      evt.target.closest('.card').remove();
    })

    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like_active');
    });

    closeButtonPicture.addEventListener('click', () => {this._handleClosePopup()})
  }
}