import Question from './question.js'
import Results from './results.js'
import mainPage from './mainPage.js'
import {answersArr} from './question.js'

class Category {
  constructor(isArtist, counter, categoryText) {
    this.isArtist = isArtist
    this.counter = counter
    this.categoryText = categoryText
    this.isArtist ? this.id = 0 : this.id = 12
    this.quiz = document.querySelector('.quiz')
    this.screen = `
      <div class="new__quiz">
        <div class="container">
          <div class="quiz-wrapper">
            <div class="quiz__header">
              <div class="quiz__header-wrapper">
                <div class="quiz__header-logo"><img class="quiz__logo-img" src="assets/svg/new-logo.svg" alt="logo">
                </div>
                <div class="quiz__header-home__btn">Home</div>
                <div class="quiz__header-categories">Categories</div>
              </div>
          </div>
          <h2 class="quiz__title">${this.categoryText}</h2>
          <ul class="quiz__categories">
            <li class="quiz__category" id="${0 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Realism</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${1 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Impressionism</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${2 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Religion</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${3 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Portrait</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${4 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Renaissance</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${5 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Painting</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${6 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Landscape</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${7 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Marine</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${8 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Avant-garde</div>
                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${9 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Surrealism</div>
                <div class="quiz__category-score"><span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>

            <li class="quiz__category" id="${10 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Surrealism</div>
                <div class="quiz__category-score"><span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
            </li>

            <li class="quiz__category" id="${11 + this.id}">
              <div class="quiz__category-top">
                <div class="quiz__category-header">Expressionism</div>
                <div class="quiz__category-score"><span class="quiz__category-counter">0</span>/10</div>
              </div>
              <div class="quiz__category-img">
                <div class="quiz__reload hidden">
                  <div class="quiz__reload-text">SCORE</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `
    this.quiz.innerHTML = this.screen
    this.quizCategories = this.quiz.querySelectorAll('.quiz__category')
    this.quizCategoryImg = this.quiz.querySelectorAll('.quiz__category-img')
    this.homeBtn = this.quiz.querySelector('.quiz__header-home__btn')
    this.quiz.classList.add('active')

    this.homeBtn.addEventListener('click', this.goHome.bind(this))
    this.setCategory()
  }

  async setCategory() {
    try {
      const scoreRaunds = getScore()
      const numArr = await this.getPictures()
      
      // Устанавливаем каринки категорий
      for (let i = 0; i < numArr.length; i++) {
        this.quizCategoryImg[i].style.backgroundImage = `url('assets/image-data/img/${numArr[i]}.jpg')`
      }

      // Выводим результаты сыгранного раунда и активируем кнопку score для просмотра резултатов раунда
      for (let i = 0; i < this.quizCategories.length; i++) {      
        if (scoreRaunds[i + this.id] !== 0) {
          this.quizCategories[i].querySelector('.quiz__category-score').classList.add('active')
          this.quizCategories[i].querySelector('.quiz__category-counter').textContent = scoreRaunds[i + this.id]
          this.quizCategories[i].querySelector('.quiz__category-img').classList.add('quiz__category-img--active')
          const quizReload = this.quizCategories[i].querySelector('.quiz__reload')
          quizReload.classList.remove('hidden')

          quizReload.addEventListener('click', (e) => {
            e.stopPropagation()
            if (e.currentTarget === quizReload) {
              let raund = this.quizCategories[i].querySelector('.quiz__category-header').textContent.toLowerCase()
              let number = +this.quizCategories[i].id
              new Results(raund, number, this.categoryText, this.isArtist, this.counter)
              this.quiz.classList.remove('active')
            }
          })
        }
      }

      // Запускаем раунд при клике на категорию
      this.quizCategories.forEach(quizCategory => {
        quizCategory.addEventListener('click', (e) => {
          if (e.currentTarget === quizCategory) {
            let raund = quizCategory.querySelector('.quiz__category-header').textContent.toLowerCase()
            let number = +quizCategory.id
           
            answersArr[number] = []
            new Question(raund, this.isArtist, this.counter, 0, number, this.categoryText)
            this.quiz.classList.remove('active')
          }

        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getPictures() {
    try {
      const res = await fetch('data.json')
      const data = await res.json()
      let categories = []
      let numArr = []

      data.forEach(el => {
        if (!categories.includes(el.category)) {
          categories.push(el.category)
        }
      })

      if (this.isArtist) {
        for (let i = 0; i < categories.length; i++) {
          for (let j = data.length / 2; j < data.length; j++) {
            if (categories[i] === data[j].category) {
              numArr.push(data[j].imageNum)
              break
            }
          }
        }
      } else {
        for (let i = 0; i < categories.length; i++) {
          for (let j = data.length - 1; j > 0; j--) {
            if (categories[i] === data[j].category) {
              numArr.push(data[j].imageNum)
              break
            }
          }
        }
      }
      return numArr

    } catch (error) {
      console.log(error)
    }


  }

  goHome() {
    this.quiz.classList.remove('active')
    new mainPage()
  }
}

function getScore() {
  let scoreRaund = []

  for (let i = 0; i < answersArr.length; i++) {
    let counter = 0
    for (let j = 0; j < answersArr[i].length; j++) {
      if (answersArr[i].length !== 0 && answersArr[i][j] === 'point__correct') {
        counter++
      }
    }
    scoreRaund.push(counter)
  }
  return scoreRaund
}

export default Category