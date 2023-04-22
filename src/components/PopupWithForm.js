import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._popupSubmit = this._popup.querySelector('.popup__submit');
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }

  textSavingLoadingData() {
    this._popupSubmit.textContent = 'Сохранение...';
  }
  
  textSaving() {
    this._popupSubmit.textContent = 'Сохранить';
  }

  textCreateLoadingData() {
    this._popupSubmit.textContent = 'Создание...';
  }

  textCreate() {
    this._popupSubmit.textContent = 'Создать';
  }

  close() {
    super.close();

    this._popupForm.reset();
  }

}