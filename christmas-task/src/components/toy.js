import { CARD_ELEMENT } from './helpers/constants';
import {toysArr} from './toys';


export default class Toy {
  constructor(obj) {
    this.color = obj.color
    this.count = obj.count
    this.name = obj.name
    this.shape = obj.shape
    this.size = obj.size
    this.year = obj.year
    this.num = obj.num
    this.favorite = obj.favorite

    this.card = document.createElement('div')
    this.card.classList.add('card')
    this.isSelected = false
  }

  get htmlText() {
    return {
      title: `${this.name}`,
      cardImage: `url('./assets/toys/${this.num}.webp')`,
      cardCount: `Количество: ${this.count}`,
      cardYear: `Год покупки: ${this.year} год`,
      cardShape: `Форма игрушки: ${this.shape}`,
      cardColor: `Цвет игрушки: ${this.color}`,
      cardSize: `Размер игрушки: ${this.size}`,
      cardBeloved: `Любимая: ${this.favorite ? 'Да' : 'Нет'}`,
    }
  }

  createCard() {
    for (let key in CARD_ELEMENT) {
      const element = CARD_ELEMENT[key]
      const htmlElement = document.createElement(element.htmlElement)
      htmlElement.classList.add(...element.classes)
      this.fillTextContent(key, htmlElement)
      this.card.append(htmlElement)
      // if (toysArr.includes(this.name) && htmlElement.classList.contains('card__favorites')) {
      //   htmlElement.classList.add('favorites')
      // } 
      // console.log(toysArr)
    }
    return this.card
  }

  fillTextContent(key, htmlElement) {
    const text = this.htmlText
    for (let el in text) {
      if (el === key) {
        if (key !== 'cardImage') {
          htmlElement.innerHTML = `${text[key]}`
        } else {
          htmlElement.style.backgroundImage = `${text[key]}`
        }
      }
    }
  }
}

// function setLocalStorage() {
//   // localStorage.setItem('mainObj', JSON.stringify(mainObj));
//   // localStorage.setItem('newData', JSON.stringify(newData));
//   localStorage.setItem('toysArr', JSON.stringify(toysArr));
//   console.log(toysArr)
// }
// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage()  {
//   if (localStorage.getItem('toysArr')) {
//     toysArr = JSON.parse(localStorage.getItem('toysArr'));
//   }
//   console.log(toysArr)
// }
// window.addEventListener('load', getLocalStorage);

// function getLocalStorage()  {
//   if (localStorage.getItem('toysArr')) {
//     toysArr = JSON.parse(localStorage.getItem('toysArr'));
//   }
//   console.log(toysArr)
// }
// window.addEventListener('load', getLocalStorage);