import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupParagraph = this._popup.querySelector('.popup__paragraph');
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupParagraph.textContent = name;
    super.open();
  }
}