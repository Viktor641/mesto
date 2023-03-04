// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


function disabledSubmit(event){
  event.preventDefault();
}

function formValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', (disabledSubmit));
    form.addEventListener('input', () => {
      toggleButton(form, config);
    })
  
    form.addEventListener('reset', () => {
      setTimeout(() => {
        toggleButton(form, config);
    }), '0'})

    setInputListeners(form, config);
    toggleButton(form, config);
  })

}

function toggleButton(form, config){
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();

  buttonSubmit.disabled = !isFormValid;

  if (!isFormValid) {
    buttonSubmit.classList.add(config.inactiveButtonClass);
    buttonSubmit.setAttribute("disabled", "");
  } else {
    buttonSubmit.classList.remove(config.inactiveButtonClass);
    buttonSubmit.removeAttribute("disabled", "");
  }
}


function isValid(evt, config) {
  const input = evt.target;
  const inputId = input.id;
  const ErrorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    ErrorElement.textContent = " ";
    ErrorElement.classList.remove(config.errorClass);
  } else {
    input.classList.add(config.inputErrorClass);
    ErrorElement.textContent = input.validationMessage;
    ErrorElement.classList.add(config.errorClass);
  }
}


function setInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach(function (item){
    item.addEventListener('input', (evt) => {
      isValid(evt, config)
    });
  });
};

formValidation(enableValidation);
