import { Card } from './Card.js'
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




function createCard(item) {
  const newElement = new Card(item, '#card-template');
  const cardElement = newElement.generateCard()
  return cardElement
}

initialCards.forEach((element) => {
  const cardElement = createCard(element)
  cards.append(cardElement);
});




const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

cardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  initialCards.name = titleInput.value;
  initialCards.link = linkInput.value;

  cards.prepend(createCard(initialCards));

  evt.target.reset();

  closeAddCardPopup();
});

const addCardValidation = new FormValidator(formValidationConfig, cardFormElement);
addCardValidation.enableValidation();

const editButton = document.querySelector(".profile__edit-btn");
const addButton = document.querySelector('.profile__add-btn');
const profilePopup = document.querySelector(".popup_theme_edit");
const popupAddbutton = document.querySelector(".popup_theme_addbutton");
const profileCloseButton = document.querySelector(".popup__close");
const closeButtonCard = document.querySelector(".popup__close_type_card");


const popups = document.querySelectorAll('.popup');


export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};


popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
  })
})


function handleEscape(evt) {
  if (evt.key === 'Escape') {
    popups.forEach(closePopup)
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

const closeProfilePopup = () => {
  closePopup(profilePopup);
};

const closeAddCardPopup = () => {
  closePopup(popupAddbutton);
};

const closeButtonPictureClick = () => {
  closePopup(popupPicture);
};

editButton.addEventListener("click", handleEditButtonClick);
addButton.addEventListener("click", handleAddButtonClick);
profileCloseButton.addEventListener("click", closeProfilePopup);
closeButtonCard.addEventListener("click", closeAddCardPopup);
closeButtonPicture.addEventListener("click", closeButtonPictureClick);

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

  closeProfilePopup();
};

profileForm.addEventListener('submit', handleProfileFormSubmit);

const profileFormValidation = new FormValidator(formValidationConfig, profileForm);
profileFormValidation.enableValidation();