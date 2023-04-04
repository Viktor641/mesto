export const formValidationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


const kamchatka = new URL('../images/daniil-silantev-h-M3O25tyvI-unsplash.jpg', import.meta.url);
const altai = new URL('../images/pavel-marianov-xnS4IPCwFjg-unsplash(1).jpg', import.meta.url);
const sudak = new URL('../images/nikolay-vorobyev-o7jIzNWvCRo-unsplash.jpg', import.meta.url);
const sochi = new URL('../images/ana-kai-QXOl2IXJ_ow-unsplash.jpg', import.meta.url);
const samara = new URL('../images/pavel-seliverstov-tXTiIjnLTrY-unsplash.jpg', import.meta.url);
const irkutskOblast = new URL('../images/ekaterina-sazonova-eAZOKkEhzDg-unsplash.jpg', import.meta.url);


export const initialCards = [
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Алтай',
    link: altai
  },
  {
    name: 'Судак',
    link: sudak
  },
  {
    name: 'Сочи',
    link: sochi
  },
  {
    name: 'Самара',
    link: samara
  },
  {
    name: 'Иркутская область',
    link: irkutskOblast
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