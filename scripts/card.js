const cards = document.querySelector('.cards');
const CardformElement = document.querySelector('.popup__form_type_card');
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


const popupPicture = document.querySelector(".popup__picture");
const closeButtonPicture = document.querySelector(".popup__close_type_picture");
const popupParagraph = document.querySelector(".popup__paragraph");
const popupImage = document.querySelector(".popup__image");



const toggleOpenPopupPicture = () => {
  popupPicture.classList.toggle("popup_opened");
};

const handleCloseButtonPictureClick = () => {
  toggleOpenPopupPicture();
};

closeButtonPicture.addEventListener("click", handleCloseButtonPictureClick);

const handleDelete = (evt) => {
  evt.target.closest('.card').remove();
}

initialCards.forEach(function (element) {
  const newElement = template.content.cloneNode(true);
  const cardImage = newElement.querySelector(".card__image");
  const cardParagraph = newElement.querySelector(".card__paragraph");

  cardParagraph.textContent = element.name;
  cardImage.src = element.link;

  newElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newElement.querySelector('.card__delete');
  deleteButton.addEventListener('click', handleDelete);

  cardImage.addEventListener('click', function () {
    popupImage.src = element.link;
    popupImage.alt = element.name;
    popupParagraph.textContent = element.name;
    toggleOpenPopupPicture();
  });

  cards.append(newElement);
});

const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');


CardformElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newElement = template.content.cloneNode(true);
  const cardImage = newElement.querySelector(".card__image");
  const cardParagraph = newElement.querySelector(".card__paragraph");

  cardParagraph.textContent = `${titleInput.value}`;
  cardImage.src = `${linkInput.value}`;

  newElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newElement.querySelector('.card__delete');
  deleteButton.addEventListener('click', handleDelete);

  cardImage.addEventListener('click', function () {
    popupImage.src = `${cardImage.src}`;
    popupImage.alt = cardParagraph.textContent;
    popupParagraph.textContent = cardParagraph.textContent;
    toggleOpenPopupPicture();
  });

  cards.prepend(newElement);

  titleInput.value = '';
  linkInput.value = '';

  toggleOpenPopupAddbutton();
});
