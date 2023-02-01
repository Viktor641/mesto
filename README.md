# Проект: Место
Проект о красивых местах России. Это мой четвертый проект. В прошлых проектах мне не хватало функциональности. В этом проекте я решил ее реализовать.

__Проект написан на HTML5, CSS и JavaScript__
___

# ___Технологии, использованные в проекте:___
__1__. Nested-структура и привязка ```@import```
```css
@import url(../blocks/header/__lang-link/header__lang-link.css);
```
__2__. ```@media и CSS grid layout```
```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));
  margin: 0 auto;
  max-width: 880px;
  column-gap: 17px;
  row-gap: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 51px;
  margin-bottom: 67px;
}

@media screen and (max-width: 920px) {
  .cards {
    width: calc(100% - 38px);
    column-gap: 13px;
  }
}
```
__3__. ```JavaScript```
```JavaScript
const EditButton = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");

const toggleOpenPopup = () => {
  popup.classList.toggle("popup_opened");
};
```

__4__. ```Popup``` эффект
```html
<section class="popup">
    <div class="popup__container">
      <button class="popup__close button"></button>
      <h2 class="popup__title">Редактировать профиль</h2>
      <form name="inputName" nethod="post" class="popup__form">
        <input class="popup__input" type="text" id="name" placeholder="Имя" value="" required>
        <input class="popup__input" type="text" id="job" placeholder="О себе" value="" required>
        <button type="submit" class="popup__submit">Сохранить</button>
      </form>
    </div>
  </section>
```
__Ссылка на проект__
https://viktor641.github.io/mesto/index.html