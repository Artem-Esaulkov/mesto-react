class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    this._buttonElement = formElement.querySelector(obj.submitButtonSelector);
  };

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`popup__field_${inputElement.id}`);
    inputElement.classList.add(this._obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._obj.errorClass);
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`popup__field_${inputElement.id}`);
    inputElement.classList.remove(this._obj.inputErrorClass);
    errorElement.classList.remove(this._obj.errorClass);
    errorElement.textContent = "";
  };
  
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  _setButtonDisabled () {
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._obj.inactiveButtonClass);
  };
  
  _removeButtonDisabled () {
    this._buttonElement.removeAttribute("disabled", true);
    this._buttonElement.classList.remove(this._obj.inactiveButtonClass);
  };
  
  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._setButtonDisabled();
    } else {
      this._removeButtonDisabled();
    };
  };
  
  _setEventListeners () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
  
  enableValidation () {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
};

const obj = {
  formSelector: ".popup",
  formSelectorOpened: ".popup_opened",
  formFieldSet: ".popup__container",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__field-error",
};

export const validateForm = (name) => {
  const formOpened = document.querySelector(`.popup_${name}`);
  const form = new FormValidator(obj, formOpened);
  form.enableValidation();
  form._setButtonDisabled();
};
