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


const handleDelete = (evt) => {
  evt.target.closest('.card').remove();
}

initialCards.forEach(function (element) {
  const newElement = template.content.cloneNode(true);

  newElement.querySelector('.card__paragraph').textContent = element.name;
  newElement.querySelector('.card__image').src = element.link;

  newElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newElement.querySelector('.card__delete');
  deleteButton.addEventListener('click', handleDelete);

  cards.append(newElement);
});

const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');


CardformElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newElement = template.content.cloneNode(true);


  newElement.querySelector('.card__paragraph').textContent = `${titleInput.value}`;
  newElement.querySelector('.card__image').src = `${linkInput.value}`;

  newElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newElement.querySelector('.card__delete');
  deleteButton.addEventListener('click', handleDelete);

  cards.prepend(newElement);

  titleInput.value = '';
  linkInput.value = '';

  toggleOpenPopupAddbutton();
});

