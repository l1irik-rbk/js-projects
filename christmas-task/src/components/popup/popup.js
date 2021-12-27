import { popupAnswer, popupText, popup } from "../helpers/constants"
import './popup.css'

export function showPopup(text) {
  popupAnswer.style.display = 'block'
  popupText.textContent = text
  popup.style.display = 'block'
}

export function closePopup() {
  popupAnswer.style.display = 'none'
  popup.style.display = 'none'
}