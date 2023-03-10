const cards = document.querySelector('.cards');
const cardFormElement = document.querySelector('.popup__form_type_card');
const template = document.querySelector('#card-template');


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


const popupPicture = document.querySelector(".popup_theme_picture");
const closeButtonPicture = document.querySelector(".popup__close_type_picture");
const popupParagraph = document.querySelector(".popup__paragraph");
const popupImage = document.querySelector(".popup__image");


const popups = document.querySelectorAll('.popup');


function openPopup(popups) {
  popups.classList.add('popup_opened');
  document.addEventListener('keydown', escapeClosePopup);
  popups.addEventListener('mousedown', overlayClosePopup);
};

function closePopup(popups) {
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeClosePopup);
  popups.removeEventListener('mousedown', overlayClosePopup);
};

const toggleOpenPopupPicture = () => {
  openPopup(popupPicture);
};

const handleCloseButtonPictureClick = () => {
  closePopup(popupPicture);
};

closeButtonPicture.addEventListener("click", handleCloseButtonPictureClick);

const handleDelete = (evt) => {
  evt.target.closest('.card').remove();
}

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


function createCard(item) {
  const newElement = template.content.cloneNode(true);
  const cardImage = newElement.querySelector(".card__image");
  const cardParagraph = newElement.querySelector(".card__paragraph");

  cardParagraph.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  newElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newElement.querySelector('.card__delete');
  deleteButton.addEventListener('click', handleDelete);

  cardImage.addEventListener('click', function () {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupParagraph.textContent = item.name;
    toggleOpenPopupPicture();
  });

  return newElement;
}


initialCards.forEach(function (element) {
  const newElement = createCard(element);
  cards.append(newElement);
});


const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');


cardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const item = {
    name: titleInput.value,
    link: linkInput.value
  }
  const newElement = createCard(item);

  cards.prepend(newElement);

  evt.target.reset();

  handleCloseButtonCardClick();
});