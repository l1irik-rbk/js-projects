import mainPage from './mainPage.js'
import Category from './category.js'
import {answersArr} from './question.js'

class Results {
  constructor(raund, number, categoryText, isArtist, counter) {
    this.raund = raund
    this.number = number
    this.categoryText = categoryText
    this.isArtist = isArtist
    this.counter = counter
    this.result = document.querySelector('.result')
    this.screen = `
    <div class="container">
      <div class="result__wrapper">
        <div class="result__header">
          <div class="result__header-left">
            <div class="result__header-logo"><img class="quiz__logo-img" src="assets/svg/new-logo.svg" alt="logo"></div>
            <div class="result__header-category">${this.categoryText}</div>
          </div>
          <div class="result__header-right">
            <div class="result__header-home__btn">Home</div>
            <div class="result__header-categories">Categories</div>
          </div>
        </div>
        <div class="result__main">
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
          <div class="result__main-img">
            <div class="result__main-img__popup">
              <div class="result__main-img__title"></div>
              <div class="result__main-img__name"></div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    `
    this.result.classList.add('active')
    this.counterRes = 0
    this.result.innerHTML = this.screen
    this.resultsImgs = this.result.querySelectorAll('.result__main-img')
    this.homeBtn = this.result.querySelector('.result__header-home__btn')
    this.headerCategory = this.result.querySelector('.result__header-category')

    this.resultsImgs.forEach(async resultsImg => {
      const imgTitle = resultsImg.querySelector('.result__main-img__title')
      const imgName = resultsImg.querySelector('.result__main-img__name')
      const images = await this.getRaundInfo()
      const answer = answersArr[this.number][this.counterRes]

      if (answer === 'point__correct') {
        resultsImg.classList.add(`quiz__category-img--active`)
      }

      imgTitle.textContent = images[this.counterRes].name
      imgName.textContent = `${images[this.counterRes].author}, ${images[this.counterRes].year}`

      resultsImg.style.backgroundImage = `url('assets/image-data/img/${images[this.counterRes].imageNum}.jpg')`

      resultsImg.addEventListener('click', () => {
        const resultPopup = resultsImg.querySelector('.result__main-img__popup')
        resultPopup.classList.toggle('result__main-img__popup--active')
      })
      this.counterRes++
    })

    this.homeBtn.addEventListener('click', this.goHome.bind(this))
    this.headerCategory.addEventListener('click', this.openCategory.bind(this))
  }

  async getRaundInfo() {
    try {
      const res = await fetch('data.json')
      const data = await res.json()
      let raund

      if (this.isArtist) {
        raund = data.filter(pic => pic.category === this.raund).slice(0, 12)
      } else {
        raund = data.filter(pic => pic.category === this.raund).reverse().slice(0, 12)
      }
      
      return raund
    } catch (error) {
      console.log(error)
    }
  }

  goHome() {
    this.result.classList.remove('active')
    new mainPage()
  }

  openCategory() {
    this.result.classList.remove('active')
    new Category(this.isArtist, this.counter, this.categoryText)
  }
}

export default Results