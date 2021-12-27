import Toy from '../toy'
import { TOY_CARD_ELEMENT } from '../helpers/constants'

export default class TreeToy extends Toy {
  constructor(data) {
    super(data)

    this.card.classList.add('toy__card')
  }

  createCard() {
    const count = this.count
    
    for (let key in TOY_CARD_ELEMENT) {
      const element = TOY_CARD_ELEMENT[key]
      let htmlElement

      if (count > 1 && element.htmlElement === 'img') {
        for (let i = 0; i < count; i++) {
          htmlElement = document.createElement(element.htmlElement)
          htmlElement.classList.add(...element.classes)
          htmlElement.src = `./assets/toys/${this.num}.webp`
          htmlElement.draggable = true
          htmlElement.addEventListener('click', drag)
          this.card.append(htmlElement)
        }
      } else {
        htmlElement = document.createElement(element.htmlElement)
        htmlElement.classList.add(...element.classes)
        this.fillTextContent(key, htmlElement)
        this.card.append(htmlElement)
      }
    }
    return this.card
  }
}

export function draw(data) {
  const blockInner = document.querySelector('.toys__block-inner')
  blockInner.innerHTML = ''

  for (let i = 0; i < data.length; i++) {
    const newToy = new TreeToy({ ...data[i] })
    const htmlCard = newToy.createCard()
    // htmlCard.addEventListener('click', this.toFavorites.bind(newToy))
    blockInner.append(htmlCard)
    // console.log(newToy)
  }
}

function drag() {
  console.log('asd')
}

