import { popupAnswer, popupText } from '../helpers/constants';
import './popup.css';

export function showPopup(text: string): void {
  popupAnswer.style.display = 'block';
  popupText.textContent = text;
}

export function closePopup(): void {
  popupAnswer.style.display = 'none';
}
