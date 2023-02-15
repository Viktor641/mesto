const EditButton = document.querySelector(".profile__edit-btn");
const AddButton = document.querySelector('.profile__add-btn');
const popup = document.querySelector(".popup");
const popupAddbutton = document.querySelector(".popup_theme_addbutton");
const closeButton = document.querySelector(".popup__close");
const closeButtonCard = document.querySelector(".popup__close_type_card");

const toggleOpenPopup = () => {
  popup.classList.toggle("popup_opened");
};

const handleEditButtonClick = () => {
  nameInput.value = `${profileText.textContent}`;
  jobInput.value = `${profilParagraph.textContent}`;
  toggleOpenPopup();
};

const toggleOpenPopupAddbutton = () => {
  popupAddbutton.classList.toggle("popup_opened");
};

const handleAddButtonClick = () => {
  toggleOpenPopupAddbutton();
};

const handleCloseButtonClick = () => {
  toggleOpenPopup();
};

const handleCloseButtonCardClick = () => {
  toggleOpenPopupAddbutton();
};


EditButton.addEventListener("click", handleEditButtonClick);
AddButton.addEventListener("click", handleAddButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
closeButtonCard.addEventListener("click", handleCloseButtonCardClick);

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
const profileText = document.querySelector('.profile__text');
const profilParagraph = document.querySelector('.profile__paragraph');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileText.value = '';
  profilParagraph.value = '';

  profileText.textContent = `${nameInput.value}`;
  profilParagraph.textContent = `${jobInput.value}`;

  toggleOpenPopup();
};

formElement.addEventListener('submit', handleFormSubmit);




