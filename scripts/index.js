const editButton = document.querySelector(".profile__edit-btn");
const addButton = document.querySelector('.profile__add-btn');
const profilePopup = document.querySelector(".popup_theme_edit");
const popupAddbutton = document.querySelector(".popup_theme_addbutton");
const profileCloseButton = document.querySelector(".popup__close");
const closeButtonCard = document.querySelector(".popup__close_type_card");
const cardImage = document.querySelector(".card__image");


const openProfilePopup = () => {
  openPopup(profilePopup);
};

const handleEditButtonClick = () => {
  nameInput.value = `${profileText.textContent}`;
  jobInput.value = `${profilParagraph.textContent}`;
  openProfilePopup();
};

const handleAddButtonClick = () => {
  openPopup(popupAddbutton);
};

const handleCloseButtonClick = () => {
  closePopup(profilePopup);
};

const handleCloseButtonCardClick = () => {
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