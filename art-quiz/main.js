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
    
    this.mainPpageArtistsBtn = document.querySelector('.main__page-quiz__artists')
    this.mainPpagePicturesBtn = document.querySelector('.main__page-quiz__pictures')
    this.wrapper = document.querySelector('.wrapper')
    this.mainPageElement = document.querySelector('.main__page')
    this.artisQuiz = document.querySelector('.artis__quiz')
    this.picturesQuiz = document.querySelector('.pictures__quiz')
    this.isArtist = false
    this.counter = 0


    this.mainPpageArtistsBtn.addEventListener('click', this.switchCategorie.bind(this))
    this.mainPpagePicturesBtn.addEventListener('click', this.switchCategorie.bind(this))
  }

  switchCategorie(e) {
    if (e.target === this.mainPpageArtistsBtn) {
      this.wrapper.classList.add('wrapper__bg')
      this.mainPageElement.classList.remove('active')
      this.isArtist = true
      new Category(this.isArtist, this.counter).setCategory()

    } else if (e.target === this.mainPpagePicturesBtn) {
      this.wrapper.classList.add('wrapper__bg')
      this.mainPageElement.classList.remove('active')
      this.isArtist = false
      new Category(this.isArtist, this.counter).setCategory()
    }
  }
}
new mainPage()






class Category {
  constructor(isArtist, counter) {
    this.quiz = document.querySelector('.quiz')
    this.isArtist = isArtist
    this.counter = counter
  }

  async setCategory() {
    this.quiz.classList.add('active')

    let quizTitle

    if (this.isArtist) {
      quizTitle = 'Artist quiz'
    } else {
      quizTitle = 'Pictures quiz'
    }

    this.quiz.innerHTML = `
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
              <h2 class="quiz__title">${quizTitle}</h2>
              <ul class="quiz__categories">
                <li class="quiz__category" id="0">
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

                <li class="quiz__category" id="1">
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

                <li class="quiz__category" id="2">
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

                <li class="quiz__category" id="3">
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

                <li class="quiz__category" id="4">
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

                <li class="quiz__category" id="5">
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

                <li class="quiz__category" id="6">
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

                <li class="quiz__category" id="7">
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

                <li class="quiz__category" id="8">
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

                <li class="quiz__category" id="9">
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

                <li class="quiz__category" id="10">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Surrealism</div>
                    <div class="quiz__category-score"><span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload hidden">
                      <div class="quiz__reload-text">SCORE</div>
                    </div>
                </li>

                <li class="quiz__category" id="11">
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
        </div>
    `
    const scoreRaunds = getScore()

    const quizCategories = document.querySelectorAll('.quiz__category')
    const quizCategoryImg = document.querySelectorAll('.quiz__category-img')

    let numArr = await this.getPictures()

    for (let i = 0; i < numArr.length; i++) {
      quizCategoryImg[i].style.backgroundImage = `url('assets/image-data/img/${numArr[i]}.jpg')`
    }

    for (let i = 0; i < quizCategories.length; i++) {
      quizCategories[i].querySelector('.quiz__category-counter').textContent = scoreRaunds[i]
      if (scoreRaunds[i] !== 0) {
        quizCategories[i].querySelector('.quiz__category-img').classList.add('quiz__category-img--active')
        const quizReload = quizCategories[i].querySelector('.quiz__reload')
        quizReload.classList.remove('hidden')

        quizReload.addEventListener('click', (e) => {
          e.stopPropagation()
          if (e.currentTarget === quizReload) {
            let raund = quizCategories[i].querySelector('.quiz__category-header').textContent.toLowerCase()
            let number = +quizCategories[i].id
            new Results(raund, number)
            this.quiz.classList.remove('active')
          }

        })
      }
    }

    quizCategories.forEach(quizCategory => {
      quizCategory.addEventListener('click', (e) => {
        if (e.currentTarget === quizCategory) {
          let raund = quizCategory.querySelector('.quiz__category-header').textContent.toLowerCase()
          let number = +quizCategory.id
          new Question(raund, this.isArtist, this.counter, 0, number).setQuestion()
          this.quiz.classList.remove('active')
        }

      })
    })
  }

  async getPictures() {
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
  }
}
// new Category(true, 0).setCategory()


class Results {
  constructor(raund, number) {
    this.raund = raund
    this.number = number
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
    let counter = 0
    this.result.innerHTML = this.screen
    this.resultsImgs = this.result.querySelectorAll('.result__main-img')

    this.resultsImgs.forEach(async resultsImg => {
      const imgTitle = resultsImg.querySelector('.result__main-img__title')
      const imgName = resultsImg.querySelector('.result__main-img__name')
      const images = await this.getRaundInfo()
      const answer = answersArr[this.number][counter]
    
      if (answer === 'point__correct') {
        resultsImg.classList.add(`quiz__category-img--active`)  
      }

      imgTitle.textContent = images[counter].name
      imgName.textContent = `${images[counter].author}, ${images[counter].year}`
 
      resultsImg.style.backgroundImage = `url('assets/image-data/img/${images[counter].imageNum}.jpg')`

      resultsImg.addEventListener('click', () => {
        const resultPopup = resultsImg.querySelector('.result__main-img__popup')
        resultPopup.classList.toggle('result__main-img__popup--active')
      })
      counter++
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



















class Question {
  constructor(category, isArtist, counter, score, number) {
    this.category = category
    this.questions = document.querySelector('.quiz__questions')
    this.quizQuestions = document.querySelector('.quiz__questions')
    this.isArtist = isArtist
    this.counter = counter
    this.score = score
    this.number = number
  }

  async setQuestion() {
    try {
      const authorsArr = await this.getRandomAutors()
      const raundObj = await this.getRaund()
      let countAuthorsArr = 0

      this.quizQuestions.classList.add('active')

      this.questions.innerHTML = `
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

      const categoryImg = document.querySelector('.category__img')
      const answers = [document.querySelector('#a1'), document.querySelector('#a2'), document.querySelector('#a3'), document.querySelector('#a4')]
      const points = document.querySelectorAll('.point')

      for (let i = 0; i < pointsArr.length; i++) {
        points[i].classList.add(pointsArr[i])
      }

      categoryImg.style.backgroundImage = `url('assets/image-data/full/${raundObj.imageNum}full.jpg')`

      answers.forEach(answer => {
        answer.textContent = authorsArr[countAuthorsArr++]
        answer.addEventListener('click', (e) => {
          if (answersArr[this.number].length === 10) {
            answersArr[this.number] = []
          }

          if (e.target === answer && e.target.textContent === raundObj.author) {
            this.score++
            answer.classList.add('correct-answer')
            pointsArr.push('point__correct')
            answersArr[this.number].push('point__correct')
            points[this.counter].classList.add('point__correct')
            new Popup(this.score, raundObj, true, this.category, this.isArtist, this.counter, this.quizQuestions, this.number).setPopup()
          } else {
            answer.classList.add('wrong-answer')
            pointsArr.push('point__wrong')
            answersArr[this.number].push('point__wrong')
            points[this.counter].classList.add('point__wrong')
            new Popup(this.score, raundObj, false, this.category, this.isArtist, this.counter, this.quizQuestions, this.number).setPopup()
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

let pointsArr = []


class Popup {
  constructor(score, raundObj, marker, category, isArtist, counter, quizQuestions, number) {
    this.popup = document.querySelector('.popup')
    this.score = score
    this.raundObj = raundObj
    this.marker = marker
    this.counter = counter
    this.category = category
    this.isArtist = isArtist
    this.quizQuestions = quizQuestions
    this.number = number
  }

  setPopup() {
    this.popup.classList.add('active')
    this.counter++

    this.popup.innerHTML = `
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

    const popupNextBtn = document.querySelector('.popup__answer-next')
    const popupAnswerImg = document.querySelector('.popup__answer-img')
    const popupAnswerResult = document.querySelector('.popup__answer-img__result')
    const popupAnswerTitle = document.querySelector('.popup__answer-title')
    const popupAnswerAuthor = document.querySelector('.popup__answer-author')
    const popupAnswerYear = document.querySelector('.popup__answer-year')

    if (this.marker) {
      popupAnswerResult.style.backgroundImage = `url('assets/svg/true.svg')`
    } else {
      popupAnswerResult.style.backgroundImage = `url('assets/svg/false.svg')`
    }

    popupAnswerImg.style.backgroundImage = `url('assets/image-data/img/${this.raundObj.imageNum}.jpg')`
    popupAnswerTitle.textContent = this.raundObj.name
    popupAnswerAuthor.textContent = this.raundObj.author
    popupAnswerYear.textContent = this.raundObj.year

    if (this.counter < 10) {
      popupNextBtn.addEventListener('click', () => {
        this.popup.classList.remove('active')
        new Question(this.category, this.isArtist, this.counter, this.score, this.number).setQuestion()
      })
    } else {
      popupNextBtn.addEventListener('click', () => {
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

        const popupChangedScore = document.querySelector('.popup__change-score')
        const popupNextQuizBtn = document.querySelector('.popup__next-btn')

        popupChangedScore.textContent = this.score
        popupNextQuizBtn.addEventListener('click', () => {
          this.quizQuestions.classList.remove('active')
          this.popup.classList.remove('active')
          pointsArr = []
          new Category(this.isArtist, 0).setCategory()
        })

      })
    }

  }
}








function getRandomNumber(num) {
  return Math.floor(Math.random() * num)
}

