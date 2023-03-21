import { openPopup, closePopup, handleCloseButtonCardClick } from './index.js'
import { formValidationConfig } from './FormValidator.js'

const initialCards = [
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-h-M3O25tyvI-unsplash.jpg'
  },
  {
    name: 'Алтай',
    link: './images/pavel-marianov-xnS4IPCwFjg-unsplash(1).jpg'
  },
  {
    name: 'Судак',
    link: './images/nikolay-vorobyev-o7jIzNWvCRo-unsplash.jpg'
  },
  {
    name: 'Сочи',
    link: './images/ana-kai-QXOl2IXJ_ow-unsplash.jpg'
  },
  {
    name: 'Самара',
    link: './images/pavel-seliverstov-tXTiIjnLTrY-unsplash.jpg'
  },
  {
    name: 'Иркутская область',
    link: './images/ekaterina-sazonova-eAZOKkEhzDg-unsplash.jpg'
  }
];


const cards = document.querySelector('.cards');
const cardFormElement = document.querySelector('.popup__form_type_card');

const popupParagraph = document.querySelector('.popup__paragraph');
const popupImage = document.querySelector('.popup__image');
const closeButtonPicture = document.querySelector(".popup__close_type_picture");
const popupPicture = document.querySelector(".popup_theme_picture");

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
    popupParagraph.textContent = `${this._name}`;
  }

  _handleClosePopup() {
    closePopup(popupPicture);
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup()
    })

    this._element.querySelector('.card__delete').addEventListener('click', (evt) => 
    evt.target.closest('.card').remove());

    this._element.querySelector('.card__like').addEventListener('click',(evt) => {
      evt.target.classList.toggle('card__like_active');
    });

    closeButtonPicture.addEventListener('click', () => {this._handleClosePopup()})
  }
  
}


initialCards.forEach((element) => {
  const newElement = new Card(element, '#card-template');
  const cardElement = newElement.generateCard()
  cards.append(cardElement);
});


const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

cardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  initialCards.name = titleInput.value;
  initialCards.link = linkInput.value;

  const newElement = new Card(initialCards, '#card-template');
  const cardElement = newElement.generateCard()
  
  cards.prepend(cardElement);

  evt.target.reset();

  handleCloseButtonCardClick();
});