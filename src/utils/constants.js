export const formValidationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


export const initialCards = [
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

export const cardFormElement = document.querySelector('.popup__form_type_card');
export const profileForm = document.querySelector('.popup__form');

export const addButton = document.querySelector('.profile__add-btn');
export const editButton = document.querySelector(".profile__edit-btn");

export const titleInput = document.querySelector('.popup__input_type_title');
export const linkInput = document.querySelector('.popup__input_type_link');

export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');