import { Card } from './card.js'
import { formValidationConfig } from './FormValidator.js'


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