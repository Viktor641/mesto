export const formValidationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

export const cardFormElement = document.querySelector('.popup__form_type_card');
export const profileForm = document.querySelector('.popup__form');
export const avatarFormElement = document.querySelector('.popup__form_type_avatar');

export const addButton = document.querySelector('.profile__add-btn');
export const editButton = document.querySelector(".profile__edit-btn");

export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');

export const profilePencil = document.querySelector('.profile__pencil');