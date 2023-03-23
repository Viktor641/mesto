import { Card } from './card.js'
import { FormValidator } from './FormValidator.js'


const formValidationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});




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

export const popupParagraph = document.querySelector('.popup__paragraph');
export const popupImage = document.querySelector('.popup__image');
export const closeButtonPicture = document.querySelector(".popup__close_type_picture");
export const popupPicture = document.querySelector(".popup_theme_picture");

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

const addCardValidation = new FormValidator(formValidationConfig, cardFormElement);
addCardValidation.enableValidation();

const editButton = document.querySelector(".profile__edit-btn");
const addButton = document.querySelector('.profile__add-btn');
const profilePopup = document.querySelector(".popup_theme_edit");
const popupAddbutton = document.querySelector(".popup_theme_addbutton");
const profileCloseButton = document.querySelector(".popup__close");
const closeButtonCard = document.querySelector(".popup__close_type_card");



export const popups = document.querySelectorAll('.popup');


export function openPopup(popups) {
  popups.classList.add('popup_opened');
  document.addEventListener('keydown', escapeClosePopup);
  popups.addEventListener('mousedown', overlayClosePopup);
};

export function closePopup(popups) {
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeClosePopup);
  popups.removeEventListener('mousedown', overlayClosePopup);
};

function overlayClosePopup() {
  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
      }
    })
  })
}

function escapeClosePopup(evt) {
  if (evt.key === 'Escape') {
    popups.forEach((popup) => {
      closePopup(popup);
    })
  }
}

const openProfilePopup = () => {
  openPopup(profilePopup);
};

const handleEditButtonClick = () => {
  openProfilePopup();
  nameInput.value = `${profileText.textContent}`;
  jobInput.value = `${profilParagraph.textContent}`;

};

const handleAddButtonClick = () => {
  openPopup(popupAddbutton);
};

const handleCloseButtonClick = () => {
  closePopup(profilePopup);
};

export const handleCloseButtonCardClick = () => {
  closePopup(popupAddbutton);
};

editButton.addEventListener("click", handleEditButtonClick);
addButton.addEventListener("click", handleAddButtonClick);
profileCloseButton.addEventListener("click", handleCloseButtonClick);
closeButtonCard.addEventListener("click", handleCloseButtonCardClick);

// Находим форму в DOM
const profileForm = document.querySelector('.popup__form');
const profileText = document.querySelector('.profile__text');
const profilParagraph = document.querySelector('.profile__paragraph');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileText.textContent = `${nameInput.value}`;
  profilParagraph.textContent = `${jobInput.value}`;

  handleCloseButtonClick();
};

profileForm.addEventListener('submit', handleProfileFormSubmit);

const profileFormValidation = new FormValidator(formValidationConfig, profileForm);
profileFormValidation.enableValidation();