import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PicturePopup from '../components/PicturePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { 
  formValidationConfig, initialCards, cardFormElement, 
  profileForm, addButton, editButton,
  titleInput, linkInput, nameInput, 
  jobInput } from '../utils/constants.js';





const userInfo = new UserInfo({
  userNameSelector: '.profile__text',
  userJobSelector: '.profile__paragraph'
});

const editProfilePopup = new PopupWithForm('.popup_theme_edit', {
  handleFormSubmit: () => {
    userInfo.setUserInfo({
      userName: `${nameInput.value}`,
      userJob: `${jobInput.value}`
    });
    editProfilePopup.close();
  }
});
editProfilePopup.setEventListeners();

editButton.addEventListener('click', function () {
  editProfilePopup.open()
  const popupUserInfo = userInfo.getUserInfo();
  nameInput.setAttribute('value', popupUserInfo.userName);
  jobInput.setAttribute('value', popupUserInfo.userJob);
})




const addCardPopup = new PopupWithForm('.popup_theme_addbutton', {
  handleFormSubmit: () => {
    renderInitialCards.addNewItem(createCard({
      name: titleInput.value,
      link: linkInput.value
    }, handleCardClick));
    addCardPopup.close();
  }
});
addCardPopup.setEventListeners();


addButton.addEventListener('click', function () {
  addCardPopup.open()
})


const picturePopup = new PicturePopup(".popup_theme_picture");
picturePopup.setEventListeners();



const handleCardClick = (name, link) => {
  picturePopup.open(name, link);
}


function createCard(item) {
  const newElement = new Card(item, '#card-template', handleCardClick);
  const cardElement = newElement.generateCard()
  return cardElement
}

const renderInitialCards = new Section({
  items: initialCards,
  renderer: (item) => {
    renderInitialCards.addItem(createCard(item))
  }
}, '.cards');
renderInitialCards.renderItems();




const addCardFormValidation = new FormValidator(formValidationConfig, cardFormElement);
addCardFormValidation.enableValidation();


const profileFormValidation = new FormValidator(formValidationConfig, profileForm);
profileFormValidation.enableValidation();