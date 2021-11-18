let answersArr = [
  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
]

function setLocalStorage() {
  localStorage.setItem('answers', JSON.stringify(answersArr))
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('answers')) {
    answersArr = JSON.parse(localStorage.getItem('answers'))
    console.log(answersArr)
  }
}
window.addEventListener('load', getLocalStorage)
getLocalStorage()


class mainPage {
  constructor() {
    this.mainPage = document.querySelector('.main__page')
    this.screen = `
      <div class="container">
        <div class="main__page-wrapper">
          <div class="main__pag-settings"></div>
          <div class="logo"></div>
          <div class="main__page-quiz">
            <div class="main__page-quiz__artists">Artist quiz</div>
            <div class="main__page-quiz__pictures">Pictures quiz</div>
          </div>
        </div>
    </div>
    `
    this.mainPage.innerHTML = this.screen
    this.mainPageArtistsBtn = this.mainPage.querySelector('.main__page-quiz__artists')
    this.mainPagePicturesBtn = this.mainPage.querySelector('.main__page-quiz__pictures')

    this.isArtist = false
    this.counter = 0

    this.mainPageArtistsBtn.addEventListener('click', this.switchCategory.bind(this))
    this.mainPagePicturesBtn.addEventListener('click', this.switchCategory.bind(this))
  }

  switchCategory(e) {
    let categoryText
    if (e.target === this.mainPageArtistsBtn) {
      categoryText = this.mainPageArtistsBtn.textContent
      this.mainPage.classList.remove('active')
      this.isArtist = true
      new Category(this.isArtist, this.counter, categoryText)
    } else if (e.target === this.mainPagePicturesBtn) {
      categoryText = this.mainPagePicturesBtn.textContent
      this.mainPage.classList.remove('active')
      this.isArtist = false
      new Category(this.isArtist, this.counter, categoryText)
    }
  }
}
new mainPage()

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
              <div class="quiz__header-settings"></div>
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

    this.setCategory()
  }

  async setCategory() {
    try {
      this.quiz.classList.add('active')

      const scoreRaunds = getScore()
      const numArr = await this.getPictures()

      // Устанавливаем каринки категорий
      for (let i = 0; i < numArr.length; i++) {
        this.quizCategoryImg[i].style.backgroundImage = `url('assets/image-data/img/${numArr[i]}.jpg')`
      }

      // Выводим результаты сыгранного раунда и активируем кнопку score для просмотра резултатов раунда
      for (let i = 0; i < this.quizCategories.length; i++) {
        this.quizCategories[i].querySelector('.quiz__category-counter').textContent = scoreRaunds[i]
        if (scoreRaunds[i] !== 0) {
          this.quizCategories[i].querySelector('.quiz__category-img').classList.add('quiz__category-img--active')
          const quizReload = this.quizCategories[i].querySelector('.quiz__reload')
          quizReload.classList.remove('hidden')

          quizReload.addEventListener('click', (e) => {
            e.stopPropagation()
            if (e.currentTarget === quizReload) {
              let raund = this.quizCategories[i].querySelector('.quiz__category-header').textContent.toLowerCase()
              let number = +this.quizCategories[i].id
              console.log(number)
              new Results(raund, number, this.categoryText)
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
}
// new Category(true, 0).setCategory()





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

















let pointsArr = []

class Question {
  constructor(category, isArtist, counter, score, number, categoryText) {
    this.category = category
    this.isArtist = isArtist
    this.counter = counter
    this.score = score
    this.number = number
    this.categoryText = categoryText
    this.quizQuestions = document.querySelector('.quiz__questions')
    this.screen = `
        <div class="quiz__pictures-category">
          <div class="container">
            <div class="category">
              <div class="line"></div>
              <div class="category__question">Кто автор этой картины?</div>
              <div class="category__img">
                <ul class="points">
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                    <li class="point"></li>
                  </ul>
              </div>
              <div class="category__answers">
                <div class="category__answer" id="a1"></div>
                <div class="category__answer" id="a2"></div>
                <div class="category__answer" id="a3"></div>
                <div class="category__answer" id="a4"></div>
              </div>
            </div>
          </div>
        </div>
      `
    this.quizQuestions.innerHTML = this.screen
    this.categoryImg = this.quizQuestions.querySelector('.category__img')
    this.answers = [this.quizQuestions.querySelector('#a1'), this.quizQuestions.querySelector('#a2'), this.quizQuestions.querySelector('#a3'), this.quizQuestions.querySelector('#a4')]
    this.points = this.quizQuestions.querySelectorAll('.point')
    this.quizQuestions.classList.add('active')

    this.setQuestion()
  }

  async setQuestion() {
    try {
      const authorsArr = await this.getRandomAutors()
      const raundObj = await this.getRaund()
      let countAuthorsArr = 0

      // Выводим текущую картинку на экран
      this.categoryImg.style.backgroundImage = `url('assets/image-data/full/${raundObj.imageNum}full.jpg')`

      // Выводим подсвтеку точек на экран
      for (let i = 0; i < pointsArr.length; i++) {
        this.points[i].classList.add(pointsArr[i])
      }

      this.answers.forEach(answer => {
        // Рандомно выводим варианты ответов
        answer.textContent = authorsArr[countAuthorsArr++]
        // Вешаем обработчик на варианты ответов
        answer.addEventListener('click', (e) => {
          if (answersArr[this.number].length === 10) {
            answersArr[this.number] = []
          }

          if (e.target === answer && e.target.textContent === raundObj.author) {
            this.score++
            answer.classList.add('correct-answer')
            pointsArr.push('point__correct')
            answersArr[this.number].push('point__correct')
            this.points[this.counter].classList.add('point__correct')
            new Popup(this.score, raundObj, true, this.category, this.isArtist, this.counter, this.quizQuestions, this.number, this.categoryText)
          } else {
            answer.classList.add('wrong-answer')
            pointsArr.push('point__wrong')
            answersArr[this.number].push('point__wrong')
            this.points[this.counter].classList.add('point__wrong')
            new Popup(this.score, raundObj, false, this.category, this.isArtist, this.counter, this.quizQuestions, this.number, this.categoryText)
          }
        })
      })
      console.log(this.counter)
    } catch (error) {
      console.log(error)
    }
  }

  async getData() {
    try {
      const res = await fetch('data.json')
      const data = await res.json()

      return data
    } catch (error) {
      console.log(error)
    }

  }

  async getRaund() {
    try {
      if (this.counter === 10) {
        this.counter = 0
        this.score = 0
        this.pointsAnswers = []
      }

      const data = await this.getData()

      const arrRaund = data.filter(pic => pic.category === this.category).slice(0, 10)
      const imageNum = arrRaund[this.counter].imageNum
      const author = arrRaund[this.counter].author
      const year = arrRaund[this.counter].year
      const name = arrRaund[this.counter].name

      const raundObj = {
        imageNum,
        author,
        year,
        name,
      }
      return raundObj

    } catch (error) {
      console.log(error)
    }

  }

  async getRandomAutors() {
    try {
      const raundObj = await this.getRaund()
      const data = await this.getData()

      const authorsArr = []
      let counter = 0

      for (let i = 0; i < 4 + counter; i++) {
        let randomAuthor = data[getRandomNumber(data.length)].author

        if (!authorsArr.includes(randomAuthor)) {
          authorsArr.push(randomAuthor)
        } else {
          counter++
        }
      }

      if (!authorsArr.includes(raundObj.author)) {
        authorsArr[getRandomNumber(authorsArr.length)] = raundObj.author
      }

      return authorsArr
    } catch (error) {
      console.log(error)
    }

  }
}




class Popup {
  constructor(score, raundObj, marker, category, isArtist, counter, quizQuestions, number, categoryText) {
    this.score = score
    this.raundObj = raundObj
    this.marker = marker
    this.counter = counter
    this.category = category
    this.isArtist = isArtist
    this.quizQuestions = quizQuestions
    this.number = number
    this.categoryText = categoryText
    this.popup = document.querySelector('.popup')
    this.screen = `
        <div class="popup__answer">
          <div class="popup__container">
            <div class="popup__content">
              <div class="popup__answer-img">
                <div class="popup__answer-img__result"></div>
              </div>
              <div class="popup__answer-wrapper">
                <div class="popup__answer-title"></div>
                <div class="popup__answer-text"><span class="popup__answer-author"></span>, <span
                    class="popup__answer-year"></span></div>
              </div>
              <div class="popup__answer-next">Next</div>
            </div>
          </div>
        </div>
      `
      this.popup.innerHTML = this.screen
      this.popupNextBtn = this.popup.querySelector('.popup__answer-next')
      this.popupAnswerImg = this.popup.querySelector('.popup__answer-img')
      this.popupAnswerResult = this.popup.querySelector('.popup__answer-img__result')
      this.popupAnswerTitle = this.popup.querySelector('.popup__answer-title')
      this.popupAnswerAuthor = this.popup.querySelector('.popup__answer-author')
      this.popupAnswerYear = this.popup.querySelector('.popup__answer-year')
      this.popup.classList.add('active')

      this.setPopup()
  }

  setPopup() {
    this.counter++

    if (this.marker) {
      this.popupAnswerResult.style.backgroundImage = `url('assets/svg/true.svg')`
    } else {
      this.popupAnswerResult.style.backgroundImage = `url('assets/svg/false.svg')`
    }

    this.popupAnswerImg.style.backgroundImage = `url('assets/image-data/img/${this.raundObj.imageNum}.jpg')`
    this.popupAnswerTitle.textContent = this.raundObj.name
    this.popupAnswerAuthor.textContent = this.raundObj.author
    this.popupAnswerYear.textContent = this.raundObj.year

    if (this.counter < 10) {
      this.popupNextBtn.addEventListener('click', () => {
        this.popup.classList.remove('active')
        new Question(this.category, this.isArtist, this.counter, this.score, this.number, this.categoryText)
      })
    } else {
      this.popupNextBtn.addEventListener('click', () => {
        this.popup.innerHTML = `
          <div class="popup__final">
            <div class="popup__container">
              <div class="popup__content">
                <div class="popup__final-img"></div>
                <div class="popup__final-text">Congratulations!</div>
                <div class="popup__final-score"><span class="popup__change-score">${this.score}</span>/10</div>
                <div class="popup__buttons">
                  <button class="popup__final-btn popup__home-btn">Home</button>
                  <button class="popup__final-btn popup__next-btn">Next Quiz</button>
                </div>
              </div>
            </div>
          </div>
        `

        const popupChangedScore = this.popup.querySelector('.popup__change-score')
        const popupNextQuizBtn = this.popup.querySelector('.popup__next-btn')

        popupChangedScore.textContent = this.score
        popupNextQuizBtn.addEventListener('click', () => {
          this.quizQuestions.classList.remove('active')
          this.popup.classList.remove('active')
          pointsArr = []
          new Category(this.isArtist, 0, this.categoryText)
        })
      })
    }
  }
}

class Results {
  constructor(raund, number, categoryText) {
    this.raund = raund
    this.number = number
    this.categoryText = categoryText
    this.result = document.querySelector('.result')
    this.screen = `
    <div class="container">
      <div class="result__wrapper">
        <div class="result__header">
          <div class="result__header-left">
            <div class="result__header-logo"><img class="quiz__logo-img" src="assets/svg/new-logo.svg" alt="logo"></div>
            <div class="result__header-category">Portrait categories</div>
          </div>
          <div class="result__header-right">
            <div class="result__header-home__btn">Home</div>
            <div class="result__header-categories">Categories</div>
            <div class="result__header-settings"></div>
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
  }

  async getRaundInfo() {
    try {
      const res = await fetch('data.json')
      const data = await res.json()
      const raund = data.filter(pic => pic.category === this.raund).slice(0, 12)
      return raund
    } catch (error) {
      console.log(error)
    }
  }
}








function getRandomNumber(num) {
  return Math.floor(Math.random() * num)
}

