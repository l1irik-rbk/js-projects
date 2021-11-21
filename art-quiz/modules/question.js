import Popup from './popup.js'
import mainPage from './mainPage.js'
import { isMuted, saundValue, timeGame, timeOfGame } from './settings.js'

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
    if (this.isArtist) {
      this.screen = `
        <div class="quiz__pictures-category">
          <div class="container">
            <div class="category">
              <div class="category__timer">
                <div class="category__timer-close"></div>
                <div class="category__timer-line"><div class="category__timer-line__dynamic"></div></div>
                <div class="category__timer-time">0:<span class="corrent__time"></span></div>
              </div>
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
    } else {
      this.screen = `
        <div class="quiz__pictures-category">
          <div class="container">
            <div class="category">
              <div class="category__timer">
                <div class="category__timer-close"></div>
                <div class="category__timer-line"><div class="category__timer-line__dynamic"></div></div>
                <div class="category__timer-time">0:<span class="corrent__time"></span></div>
              </div>
              <div class="category__question"></div>
              <div class="category__answers">
                <div class="category__answer category__answer-img " id="a1"></div>
                <div class="category__answer category__answer-img" id="a2"></div>
                <div class="category__answer category__answer-img" id="a3"></div>
                <div class="category__answer category__answer-img" id="a4"></div>
              </div>
              <ul class="points points__img">
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
          </div>
        </div>
      `
    }
    this.quizQuestions.innerHTML = this.screen
    this.categoryImg = this.quizQuestions.querySelector('.category__img')
    this.answers = [this.quizQuestions.querySelector('#a1'), this.quizQuestions.querySelector('#a2'), this.quizQuestions.querySelector('#a3'), this.quizQuestions.querySelector('#a4')]
    this.points = this.quizQuestions.querySelectorAll('.point')
    this.correntTime = this.quizQuestions.querySelector('.corrent__time')
    this.dynamicLine = this.quizQuestions.querySelector('.category__timer-line__dynamic')
    this.line = this.quizQuestions.querySelector('.category__timer-line')
    this.closeBtn = this.quizQuestions.querySelector('.category__timer-close')
    this.quizQuestions.classList.add('active__page')
    this.quizQuestions.classList.add('active')

    this.closeBtn.addEventListener('click', this.closeRaund.bind(this))
    this.setQuestion()
  }

  async setQuestion() {
    try {
      const authorsArr = await this.getRandomAutors()
      const picturesArr = await this.getRandomPictures()
      const raundObj = await this.getRaund()

      let countArr = 0

      if (pointsArr.length === 10) {
        pointsArr = []
      }

      // Выводим текущую картинку на экран
      if (this.isArtist) {
        this.categoryImg.style.backgroundImage = `url('assets/image-data/full/${raundObj.imageNum}full.jpg')`
      } else {
        this.quizQuestions.querySelector('.category__question').textContent = `Какую картину написал ${raundObj.author}?`
      }

      // Выводим подсвтеку точек на экран
      for (let i = 0; i < pointsArr.length; i++) {
        this.points[i].classList.add(pointsArr[i])
      }

      // Игра на время
      +timeOfGame < 10 ? this.correntTime.textContent = `0${timeOfGame}` : this.correntTime.textContent = `${timeOfGame}`

      if (timeGame) {
        this.timeGames()
      }

      this.answers.forEach(answer => {
        // Рандомно выводим варианты ответов в завсисимости от выбранной категории 
        if (this.isArtist) {
          answer.textContent = authorsArr[countArr++]
        } else {
          answer.style.backgroundImage = `url('assets/image-data/img/${picturesArr[countArr++]}.jpg')`
        }

        // Вешаем обработчик на варианты ответов
        answer.addEventListener('click', (e) => {
          if (answersArr[this.number].length === 10) answersArr[this.number] = []

          let answerPicNumber

          if (!this.isArtist) {
            answerPicNumber = e.target.style.backgroundImage.split('/')
            answerPicNumber = answerPicNumber[answerPicNumber.length - 1].split('.')[0]
          }

          if (e.target === answer && (e.target.textContent === raundObj.author || answerPicNumber === raundObj.imageNum)) {
            if (!this.isArtist) {
              const correctAnswer = document.createElement('div')
              correctAnswer.classList.add('category__answer-img--true')
              answer.append(correctAnswer)
            }

            this.music('./assets/audio/correct.mp3')
            this.score++
            answer.classList.add('correct-answer')
            pointsArr.push('point__correct')
            answersArr[this.number].push('point__correct')
            this.points[this.counter].classList.add('point__correct')
            new Popup(this.score, raundObj, true, this.category, this.isArtist, this.counter, this.quizQuestions, this.number, this.categoryText)
          } else {
            if (!this.isArtist) {
              const correctAnswer = document.createElement('div')
              correctAnswer.classList.add('category__answer-img--false')
              answer.append(correctAnswer)
            }

            this.music('./assets/audio/uncorrect.mp3')
            answer.classList.add('wrong-answer')
            pointsArr.push('point__wrong')
            answersArr[this.number].push('point__wrong')
            this.points[this.counter].classList.add('point__wrong')
            new Popup(this.score, raundObj, false, this.category, this.isArtist, this.counter, this.quizQuestions, this.number, this.categoryText)
          }
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  async timeGames() {
    try {
      let currentTime = this.correntTime.textContent
      const raundObj = await this.getRaund()
      const currentSpan = this.correntTime
      const answers = this.answers
      const number = this.number
      const counter = this.counter
      const points = this.points
      const score = this.score
      const category = this.category
      const isArtist = this.isArtist
      const quizQuestions = this.quizQuestions
      const categoryText = this.categoryText
      const dynamicLine = this.dynamicLine
      const closeRaundBtn = this.closeBtn
      const line = this.line
      const lineStyle = window.getComputedStyle(line)
      const lineWidth = +lineStyle.width.replace('px', '')
      let currentLength = 0

      closeRaundBtn.addEventListener('click', () => clearTimeout(timer))
      answers.forEach(answer => answer.addEventListener('click', () => clearTimeout(timer)))

      let timer = setTimeout(function timerf() {
        currentTime--
        currentLength += lineWidth / timeOfGame
        dynamicLine.style.width = `${currentLength}px`
        currentTime < 10 ? currentSpan.textContent = `0${currentTime}` : currentSpan.textContent = `${currentTime}`

        if (currentTime !== 0) timer = setTimeout(timerf, 1000)
        if (currentTime === 0) {
          if (!isMuted) {
            const audio = new Audio('./assets/audio/uncorrect.mp3')
            audio.volume = saundValue
            audio.play()
          }

          currentLength = 0
          answers.forEach(answer => answer.classList.add('wrong-answer'))
          pointsArr.push('point__wrong')
          answersArr[number].push('point__wrong')
          points[counter].classList.add('point__wrong')
          new Popup(score, raundObj, false, category, isArtist, counter, quizQuestions, number, categoryText)
        }
      }, 1000)
    } catch (error) {
      console.log(error)
    }

  }

  closeRaund() {
    pointsArr = []

    this.quizQuestions.classList.add('deactivate__page')
    this.quizQuestions.classList.remove('active__page')
    setTimeout(() => {
      this.quizQuestions.classList.remove('deactivate__page')
      this.quizQuestions.classList.remove('active')
      new mainPage()
    }, 1000)
  }

  music(url) {
    if (!isMuted) {
      const audio = new Audio(url)
      audio.volume = saundValue
      audio.play()
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
      let arrRaund

      if (this.isArtist) {
        arrRaund = data.filter(pic => pic.category === this.category).slice(0, 10)
      } else {
        arrRaund = data.filter(pic => pic.category === this.category).reverse().slice(0, 10)
      }

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

  async getRandomPictures() {
    try {
      const raundObj = await this.getRaund()
      const data = await this.getData()

      const picturesArr = []
      let counter = 0

      for (let i = 0; i < 4 + counter; i++) {
        let randomPicture = data[getRandomNumber(data.length)].imageNum

        if (!picturesArr.includes(randomPicture)) {
          picturesArr.push(randomPicture)
        } else {
          counter++
        }
      }

      if (!picturesArr.includes(raundObj.imageNum)) {
        picturesArr[getRandomNumber(picturesArr.length)] = raundObj.imageNum
      }

      return picturesArr
    } catch (error) {
      console.log(error)
    }

  }
}

function getRandomNumber(num) {
  return Math.floor(Math.random() * num)
}

export let answersArr = [
  [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
]

function setLocalStorage() {
  localStorage.setItem('answers', JSON.stringify(answersArr))
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('answers')) {
    answersArr = JSON.parse(localStorage.getItem('answers'))
  }
}
window.addEventListener('load', getLocalStorage)

export default Question