import data from './data';
import FilterToys from './filter';

export default class Toys {
  constructor() {
    // this.select = document.querySelector('#select').addEventListener('change', (e) => {
    //   new FilterToys().sorted(e)
    // })
    // this.toys = document.querySelector('.filters__forms-btns').addEventListener('click', (e) => {
    //   new FilterToys().filtred(e)
    // })
  }

  draw(data) {
    const inner = document.querySelector('.toys__inner')
    inner.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
      const card = document.createElement('div')
      const h5 = document.createElement('h5')
      const cardImg = document.createElement('div')
      const cardCount = document.createElement('p')
      const cardYear = document.createElement('p')
      const cardColor = document.createElement('p')
      const cardSize = document.createElement('p')
      const cardBeloved = document.createElement('p')
      const cardShape = document.createElement('p')
      const cardFavorites = document.createElement('div')

      card.classList.add('card')
      h5.classList.add('card__title', 'title')
      cardImg.classList.add('card__img')
      cardCount.classList.add('card__count')
      cardYear.classList.add('card__year')
      cardShape.classList.add('card__shape')
      cardColor.classList.add('card__color')
      cardSize.classList.add('card__size')
      cardBeloved.classList.add('card__beloved')
      cardFavorites.classList.add('card__favorites')

      let favorite = data[i].favorite ? 'да' : 'нет'

      h5.textContent = `${data[i].name}`
      cardImg.style.backgroundImage = `url('./assets/toys/${data[i].num}.webp')`
      cardCount.textContent = `Количество: ${data[i].count}`
      cardYear.textContent = `Год покупки: ${data[i].year} год`
      cardShape.textContent = `Форма игрушки: ${data[i].shape}`
      cardColor.textContent = `Цвет игрушки: ${data[i].color}`
      cardSize.textContent = `Размер игрушки: ${data[i].size}`
      cardBeloved.textContent = `Любимая: ${favorite}`

      inner.append(card)
      card.append(h5)
      card.append(cardImg)
      card.append(cardCount)
      card.append(cardYear)
      card.append(cardShape)
      card.append(cardColor)
      card.append(cardSize)
      card.append(cardBeloved)
      card.append(cardFavorites)

      card.addEventListener('click', this.toFavorites)
    }
  }

  toFavorites() {
    const element = this
    const elementTitle = element.querySelector('.card__title').textContent
    const favorites = element.querySelector('.card__favorites')

    if (!favorites.classList.contains('favorites') && counter < 21) {
      if (toys.length < 20) {
        favorites.classList.add('favorites')
        toys.push(elementTitle)
      }
      counter++
      document.querySelector('.filters__top-score').textContent = `${counter}`
      if (counter === 21) {
        alert('Извините, все слоты заполнены')
        counter--
        document.querySelector('.filters__top-score').textContent = `${counter}`
      }
    } else if (favorites.classList.contains('favorites')) {
      favorites.classList.remove('favorites')
      const toyIndex = toys.indexOf(elementTitle)
      if (toyIndex !== -1) toys.splice(toyIndex, 1)
      counter--
      document.querySelector('.filters__top-score').textContent = `${counter}`
    }
  }

}

// document.querySelector('#select').addEventListener('change', (e) => {
//   new FilterToys().sorted(e)
// })
// document.querySelector('.filters__forms-btns').addEventListener('click', (e) => {
//   new FilterToys().filtred(e)
// })

// document.querySelector('.filters__color').addEventListener('click', (e) => {
//   new FilterToys().filtred(e)
// })

// document.querySelector('.filters__size-checkboxes').addEventListener('click', (e) => {
//   new FilterToys().filtred(e)
// })

// document.querySelector('.filters__size-favorite').addEventListener('click', (e) => {
//   new FilterToys().filtred(e)
// })

let counter = 0
const toys = []


