import { popupAnswer, popupText } from '../helpers/constants';
import './popup.css';

export function showPopup(text: string) {
  popupAnswer.style.display = 'block';
  popupText.textContent = text;
}

export function closePopup() {
  popupAnswer.style.display = 'none';
}
