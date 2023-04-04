export default class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  _disabledSubmit(event) {
    event.preventDefault();
  }

  enableValidation() {
    this._form.addEventListener('submit', (this._disabledSubmit));
    this._form.addEventListener('input', () => {
      this._toggleButton();
    })

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButton();
      }), '0'
    })

    this._setInputListeners();
    this._toggleButton();

  }

  _toggleButton() {
    const isFormValid = this._form.checkValidity();

    this._submitButton.disabled = !isFormValid;

    if (!isFormValid) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute("disabled", "");
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute("disabled", "");
    }
  }

  _isValid(evt) {
    const input = evt.target;
    const inputId = input.id;
    const ErrorElement = this._form.querySelector(`#${inputId}-error`);


    if (input.validity.valid) {
      input.classList.remove(this._inputErrorClass);
      ErrorElement.textContent = " ";
      ErrorElement.classList.remove(this._errorClass);
    } else {
      input.classList.add(this._inputErrorClass);
      ErrorElement.textContent = input.validationMessage;
      ErrorElement.classList.add(this._errorClass);
    }
  }

  _setInputListeners() {
    this._inputList.forEach((item) => {
      item.addEventListener('input', (evt) => {
        this._isValid(evt);
      });
    })
  }
}