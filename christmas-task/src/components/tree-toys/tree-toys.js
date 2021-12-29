import Toy from '../toy'
import { TOY_CARD_ELEMENT } from '../helpers/constants'

export default class TreeToy extends Toy {
  constructor(data) {
    super(data)
    this.card.classList.add('toy__card')
  }

  createCard(number) {
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
          htmlElement.id = `el-${number}${i}`
          htmlElement.setAttribute('data-imgNum', number)
          htmlElement.addEventListener('dragstart', dragStart)
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
    const htmlCard = newToy.createCard(i)
    htmlCard.setAttribute('data-num', i)
    blockInner.append(htmlCard)
  }
}

function dragStart(e) {
  const map = document.querySelector('area')
  const cards = document.querySelectorAll('.toy__card')

  e.dataTransfer.setData('id', e.target.id)
  const shiftX = e.clientX - e.target.getBoundingClientRect().left
  const shiftY = e.clientY - e.target.getBoundingClientRect().top

  function dragOver(e) {
    e.preventDefault()

    if (e.type !== 'drop') {
      return;
    }

    const itemID = e.dataTransfer.getData('id')
    const item = document.getElementById(`${itemID}`)
    const itemDataAtr = item.dataset.imgnum
    item.style.left = e.pageX - shiftX + 'px'
    item.style.top = e.pageY - shiftY + 'px'
    map.appendChild(item)
    cardCounter()

    function leaveTree(event) {
      item.style.visibility = 'hidden'
      const targetDrop = document.elementFromPoint(event.clientX, event.clientY)
      item.style.visibility = 'visible'

      cards.forEach(card => {
        const cardDataAtr = card.dataset.num
        if (targetDrop.tagName !== map.tagName && itemDataAtr === cardDataAtr) {
          item.parentNode.removeChild(item)
          item.style.left = `${12}px`
          item.style.top = `${7}px`
          card.append(item)
          cardCounter()
        }
      })
    }
    item.addEventListener('dragend', leaveTree)
  }

  function cardCounter() {
    cards.forEach(card => {
      const toysNumbers = card.querySelectorAll('img')
      const toysCounter = card.querySelector('span')
      const cardDataAtr = card.dataset.num

      if (e.target.dataset.imgnum === cardDataAtr) {
        for (let i = 0; i <= toysNumbers.length; i++) {
          toysCounter.textContent = i
        }
      }
    })
  }

  map.addEventListener('drop', dragOver)
  map.addEventListener('dragover', dragOver)
}

export function resetTree() {
  localStorage.removeItem('garlandColor')
  localStorage.removeItem('audioFlag')
  localStorage.removeItem('snowFlag')
  localStorage.removeItem('treeNumber')
  localStorage.removeItem('bgNumber')
}