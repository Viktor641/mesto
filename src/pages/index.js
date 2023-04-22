import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PicturePopup from '../components/PicturePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import { Api } from '../components/Api.js';
import { apiRequest } from '../utils/apiRequest.js';
import {
  formValidationConfig, cardFormElement,
  profileForm, addButton, editButton,
  nameInput, jobInput, profilePencil,
  avatarFormElement
} from '../utils/constants.js';

import '../pages/index.css';

const api = new Api(apiRequest);




const userInfo = new UserInfo({
  userNameSelector: '.profile__text',
  userJobSelector: '.profile__paragraph',
  avatarSelector: '.profile__avatar'
});



Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([ProfileData, cardObject]) => {
    userId = ProfileData._id;
    userInfo.setUserInfo({ userName: ProfileData.name, userJob: ProfileData.about });
    renderInitialCards.renderItems(cardObject);
    userInfo.setUserAvatar(ProfileData.avatar);
  })
  .catch((err) => { console.log(`Произошла ошибка ${err}`) })


const editProfilePopup = new PopupWithForm('.popup_theme_edit', {
  handleFormSubmit: (profileData) => {
    editProfilePopup.textSavingLoadingData();
    api.sendUserData(profileData)
      .then((res) => {
        userInfo.setUserInfo({ userName: res.name, userJob: res.about });
        editProfilePopup.close();
        editProfilePopup.textSaving();
      })
      .catch((err) => {
        console.log(`При редактировании профиля произошла ошибка ${err}`);
      })
  }
});

editProfilePopup.setEventListeners();

editButton.addEventListener('click', function () {
  editProfilePopup.open();
  const popupUserInfo = userInfo.getUserInfo();
  nameInput.value = popupUserInfo.userName;
  jobInput.value = popupUserInfo.userJob;
})




const addCardPopup = new PopupWithForm('.popup_theme_addbutton', {
  handleFormSubmit: (addCardInput) => {
    addCardPopup.textCreateLoadingData();
    api.addNewCard({
      name: addCardInput.title,
      link: addCardInput.link
    })
      .then((card) => {
        renderInitialCards.addNewItem(renderCard(card));
        addCardPopup.close();
        addCardPopup.textCreate();
      })
      .catch((err) => {
        console.log(`При добавлении карточки произошла ошибка ${err}`)
      })
  }
});
addCardPopup.setEventListeners();


addButton.addEventListener('click', function () {
  addCardPopup.open()
})




const popupChangeProfile = new PopupWithForm('.popup_theme_avatar', {
  handleFormSubmit: (avatarLink) => {
    popupChangeProfile.textSavingLoadingData();
    api.sendAvatarData(avatarLink)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupChangeProfile.close();
        popupChangeProfile.textSaving();
      })
      .catch((err) => {
        console.log(`При обновлении аватарки произошла ошибка ${err}`);
      })
  }
})
popupChangeProfile.setEventListeners();

profilePencil.addEventListener('click', function () {
  popupChangeProfile.open()
})



const popupWithConfirmationDelete = new PopupWithConfirmation('.popup_theme_delete', {
  callbackConfirmation: (cardElement, cardId) => {
    api.deleteCardId(cardId)
      .then(() => {
        cardElement.deleteCard();
        popupWithConfirmationDelete.close();
      })
      .catch((err) => {
        console.log(`При удалении карточки произошла ошибка ${err}`)
      })
  }
});
popupWithConfirmationDelete.setEventListeners();



const picturePopup = new PicturePopup(".popup_theme_picture");
picturePopup.setEventListeners();



let userId;

const renderCard = function (cardObject) {
  const cardItem = new Card(cardObject, '#card-template', userId, { cardId: cardObject._id, authorId: cardObject.owner._id, }, {

    handleCardZoom: (name, link) => {
      picturePopup.open(name, link)
    },

    handleCardDelete: (cardElement, cardId) => {
      popupWithConfirmationDelete.open(cardElement, cardId)
    },

    handleCardLike: (cardId) => {
      api.putLike(cardId)
        .then((res) => {
          cardItem.renderCardLike(res)
        })
        .catch((err) => {
          console.log(`Произошла ошибка ${err}`)
        })
    },

    handleCardDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((res) => {
          cardItem.renderCardLike(res)
        })
        .catch((err) => {
          console.log(`Произошла ошибка, ${err}`)
        })
    },
  });
  return cardItem.generateCard();
}

const renderInitialCards = new Section({
  renderer: (cardObject) => {
    renderInitialCards.addItem(renderCard(cardObject));
  }
}, '.cards')



const addCardFormValidation = new FormValidator(formValidationConfig, cardFormElement);
addCardFormValidation.enableValidation();


const profileFormValidation = new FormValidator(formValidationConfig, profileForm);
profileFormValidation.enableValidation();


const popupChangeProfileFormValidation = new FormValidator(formValidationConfig, avatarFormElement);
popupChangeProfileFormValidation.enableValidation()