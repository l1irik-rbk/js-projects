class mainPage {
  constructor() {
    this.mainPpageArtistsBtn = document.querySelector('.main__page-quiz__artists')
    this.mainPpagePicturesBtn = document.querySelector('.main__page-quiz__pictures')
    this.wrapper = document.querySelector('.wrapper')
    this.mainPageElement = document.querySelector('.main__page')
    this.artisQuiz = document.querySelector('.artis__quiz')
    this.picturesQuiz = document.querySelector('.pictures__quiz')
    this.isArtist = false

    // this.headerHomeBtn = document.querySelector(`.quiz__header-home__btn`)
    // this.headerHomeBtn.addEventListener('click', this.goHome.bind(this))

    this.mainPpageArtistsBtn.addEventListener('click', this.switchCategorie.bind(this))
    this.mainPpagePicturesBtn.addEventListener('click', this.switchCategorie.bind(this))
  }

  switchCategorie(e) {

    if (e.target === this.mainPpageArtistsBtn) {
      this.wrapper.classList.add('wrapper__bg')
      this.mainPageElement.classList.remove('active')
      this.isArtist = true
      new Category(this.isArtist).setCategory()

    } else if (e.target === this.mainPpagePicturesBtn) {
      this.wrapper.classList.add('wrapper__bg')
      this.mainPageElement.classList.remove('active')
      this.isArtist = false
      new Category(this.isArtist).setCategory()
    }
  }


  // goHome(e) {
  //   if (e.target === this.headerHomeBtn) {
  //     this.wrapper.classList.remove('wrapper__bg')
  //     this.mainPageElement.classList.add('active')
  //     this.artisQuiz.classList.remove('active')
  //     this.picturesQuiz.classList.remove('active')
  //   }
  // }
}
// new mainPage()


class Category {
  constructor(isArtist) {
    this.quiz = document.querySelector('.quiz')
    this.isArtist = true
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
                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Realism</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Impressionism</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Religion</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Portrait</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Renaissance</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Painting</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Landscape</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Marine</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Avant-garde</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Surrealism</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Romanticism</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <div src="assets/svg/reload.svg" alt="reload">
                        <div class="quiz__reload-text">Play again</div>
                      </div>
                    </div>
                </li>

                <li class="quiz__category">
                  <div class="quiz__category-top">
                    <div class="quiz__category-header">Expressionism</div>
                    <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>
                  </div>
                  <div class="quiz__category-img">
                    <div class="quiz__reload">
                      <img class="quiz__reload-img" src="assets/svg/reload.svg" alt="reload">
                      <div class="quiz__reload-text">Play again</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    `

    const quizCategories = document.querySelectorAll('.quiz__category')
    const quizCategoryImg = document.querySelectorAll('.quiz__category-img')

    let numArr = await this.getPictures()

    for (let i = 0; i < numArr.length; i++) {
      quizCategoryImg[i].style.backgroundImage = `url('assets/image-data/img/${numArr[i]}.jpg')`
    }

    quizCategories.forEach(quizCategory => {
      quizCategory.addEventListener('click', (e) => {
        if (e.currentTarget === quizCategory) {
          let raund = quizCategory.querySelector('.quiz__category-header').textContent.toLowerCase()
          new Question(raund, this.isArtist, 0).setQuestion()
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
new Category().setCategory()







class Question {
  constructor(category, isArtist, counter) {
    this.category = category
    this.questions = document.querySelector('.quiz__questions')
    this.quizQuestions = document.querySelector('.quiz__questions')
    this.isArtist = isArtist
    this.counter = counter
    this.score = 0
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
          if (e.target === answer && e.target.textContent === raundObj.author) {
            this.score++
            answer.classList.add('correct-answer')
            pointsArr.push('point__correct')
            points[this.counter].classList.add('point__correct')
            new Popup(this.score, raundObj, true, this.category, this.isArtist, this.counter, this.quizQuestions).setPopup()
          } else {
            answer.classList.add('wrong-answer')
            pointsArr.push('point__wrong')
            points[this.counter].classList.add('point__wrong')
            new Popup(this.score, raundObj, false, this.category, this.isArtist, this.counter, this.quizQuestions).setPopup()
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
  constructor(score, raundObj, marker, category, isArtist, counter, quizQuestions) {
    this.popup = document.querySelector('.popup')
    this.score = score
    this.raundObj = raundObj
    this.marker = marker
    this.counter = counter
    this.category = category
    this.isArtist = isArtist
    this.quizQuestions = quizQuestions
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
        new Question(this.category, this.isArtist, this.counter).setQuestion()
      })
    } else {
      popupNextBtn.addEventListener('click', () => {
        this.popup.innerHTML = `
          <div class="popup__final">
            <div class="popup__container">
              <div class="popup__content">
                <div class="popup__final-img"></div>
                <div class="popup__final-text">Congratulations!</div>
                <div class="popup__final-score"><span class="popup__change-score">0</span>/10</div>
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
          new Category(this.isArtist).setCategory()
        })
        
      })
    }

  }
}













// const answers = [
//   null, null
// ]

// function setLocalStorage() {
//   localStorage.setItem('answers', answers)
// }
// window.addEventListener('beforeunload', setLocalStorage)

// function getLocalStorage() {
//   if (localStorage.getItem('answers')) {
//     console.log('adsdas')
//   }
// }
// window.addEventListener('load', getLocalStorage)

function getRandomNumber(num) {
  return Math.floor(Math.random() * num)
}

