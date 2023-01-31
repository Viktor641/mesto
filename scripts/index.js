const EditButton = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");

const toggleOpenPopup = () => {
  popup.classList.toggle("popup_opened");
};

const handleEditButtonClick = () => {
  toggleOpenPopup();
};

const handleCloseButtonClick = () => {
  toggleOpenPopup();
};

EditButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
let profileText = document.querySelector('.profile__text');
let profilParagraph = document.querySelector('.profile__paragraph');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileText.value = '';
  profilParagraph.value = '';

  profileText.textContent = `${nameInput.value}`;
  profilParagraph.textContent = `${jobInput.value}`;
  toggleOpenPopup();
};

formElement.addEventListener('submit', handleFormSubmit);