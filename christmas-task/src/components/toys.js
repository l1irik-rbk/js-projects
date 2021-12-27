import Toy from './toy'
import { score, MAX_CARDS } from './helpers/constants'
import { showPopup } from './popup/popup'

export default class Toys {
  draw(data) {
    const inner = document.querySelector('.toys__inner')
    inner.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
      const newToy = new Toy({ ...data[i] })
      const htmlCard = newToy.createCard()
      htmlCard.addEventListener('click', this.toFavorites.bind(newToy))
      inner.append(htmlCard)
    }
  }

  toFavorites() {
    const card = this.card
    this.isSelected = !this.isSelected
    const favorites = card.querySelector('.card__favorites')
    const cardName = card.querySelector('.card__title').textContent
   
    if (!favorites.classList.contains('favorites') && counter < MAX_CARDS) {
      if (toysArr.length < MAX_CARDS - 1) {
        favorites.classList.add('favorites')
        toysArr.push(cardName)
        newData.push(this)
      }
      counter++
      score.textContent = `${counter}`
      if (counter === MAX_CARDS) {
        showPopup('Извините, все слоты заполнены')
        counter--
        score.textContent = `${counter}`
      }
    } else if (favorites.classList.contains('favorites')) {
      favorites.classList.remove('favorites')
      const toyIndex = toysArr.indexOf(cardName)
      if (toyIndex !== -1) {
        toysArr.splice(toyIndex, 1)
        newData.splice(toyIndex, 1)
      } 
      counter--
      score.textContent = `${counter}`
    }
  }
}

function setLocalStorage() {
  localStorage.setItem('toysArr', JSON.stringify(toysArr));
  localStorage.setItem('counter', counter);
}

function getLocalStorage() {
  if (localStorage.getItem('toysArr')) {
    toysArr = JSON.parse(localStorage.getItem('toysArr'));
  }

  if (localStorage.getItem('counter')) {
    counter = localStorage.getItem('counter');
  }

  const inner = document.querySelector('.toys__inner')
  const cards = inner.querySelectorAll('.card')
  cards.forEach(card => {
    if (toysArr.includes(card.querySelector('h5').textContent)) {
      card.querySelector('.card__favorites').classList.add('favorites')
    }
  })
  score.textContent = counter
}
// window.addEventListener('beforeunload', setLocalStorage);
// window.addEventListener('load', getLocalStorage);

let counter = 0
export let toysArr = []
export let newData = []