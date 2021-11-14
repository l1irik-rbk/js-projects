// class mainPage {
//   constructor() {
//     this.mainPpageArtistsBtn = document.querySelector('.main__page-quiz__artists')
//     this.mainPpagePicturesBtn = document.querySelector('.main__page-quiz__pictures')
//     this.wrapper = document.querySelector('.wrapper')
//     this.mainPageElement = document.querySelector('.main__page')
//     this.artisQuiz = document.querySelector('.artis__quiz')
//     this.picturesQuiz = document.querySelector('.pictures__quiz')
//     this.categorie = ''

//     this.headerHomeBtn = document.querySelector(`.${this.categorie}__quiz .quiz__header-home__btn`)
//     this.headerHomeBtn.addEventListener('click', this.goHome.bind(this))

//     this.mainPpageArtistsBtn.addEventListener('click', this.switchCategorie.bind(this))
//     this.mainPpagePicturesBtn.addEventListener('click', this.switchCategorie.bind(this))
//   }

//   switchCategorie(e) {
//     if (e.target === this.mainPpageArtistsBtn) {
//       this.wrapper.classList.add('wrapper__bg')
//       this.mainPageElement.classList.remove('active')
//       this.artisQuiz.classList.add('active')
//       this.categorie = e.target.textContent.toLowerCase().split(' ')[0]
//     } else if (e.target === this.mainPpagePicturesBtn) {
//       this.wrapper.classList.add('wrapper__bg')
//       this.mainPageElement.classList.remove('active')
//       this.picturesQuiz.classList.add('active')
//       this.categorie = e.target.textContent.toLowerCase().split(' ')[0]
//     }
//   }


//   goHome(e) {
//     if (e.target === this.headerHomeBtn) {
//       this.wrapper.classList.remove('wrapper__bg')
//       this.mainPageElement.classList.add('active')
//       this.artisQuiz.classList.remove('active')
//       this.picturesQuiz.classList.remove('active')
//     }
//   }
// }
// new mainPage()

// class Categorie{
//   constructor(categorie) {
//     this.categorie = new mainPage(categorie)
//     this.headerHomeBtn = document.querySelector(`.${this.categorie}__quiz .quiz__header-home__btn`)
//     console.log(this.categorie)
//     this.headerHomeBtn.addEventListener('click', this.goHome.bind(this))
//   }

//   goHome(e) {
//     if (e.target === this.headerHomeBtn) {
//       this.wrapper.classList.remove('wrapper__bg')
//       this.mainPageElement.classList.add('active')
//       this.artisQuiz.classList.remove('active')
//       this.picturesQuiz.classList.remove('active')
//     }
//   }

// }
// // console.log(new Categorie())
// new Categorie()












// const mainPpageArtistsBtn = document.querySelector('.main__page-quiz__artists')
// const mainPpagePicturesBtn = document.querySelector('.main__page-quiz__pictures')
// const wrapper = document.querySelector('.wrapper')
// const mainPageElement = document.querySelector('.main__page')
// const artisQuiz = document.querySelector('.artis__quiz')
// const picturesQuiz = document.querySelector('.pictures__quiz')

// let category = ''

// function switchCategorie(e) {
//   if (e.target === mainPpageArtistsBtn) {
//     wrapper.classList.add('wrapper__bg')
//     mainPageElement.classList.remove('active')
//     artisQuiz.classList.add('active')
//     category = e.target.textContent.toLowerCase().split(' ')[0]
//   } else if (e.target === mainPpagePicturesBtn) {
//     wrapper.classList.add('wrapper__bg')
//     mainPageElement.classList.remove('active')
//     picturesQuiz.classList.add('active')
//     category = e.target.textContent.toLowerCase().split(' ')[0]
//   }
// }

// mainPpageArtistsBtn.addEventListener('click', switchCategorie)
// mainPpagePicturesBtn.addEventListener('click', switchCategorie)

// function newCategory() {
//   // console.log(category)
//   // const headerHomeBtn = document.querySelector(`.${category}__quiz .quiz__header-home__btn`)
//   const headerHomeBtn = document.querySelector(`.quiz__header-home__btn`)
//   headerHomeBtn.addEventListener('click', goHome) 

//   function goHome(e) {
//     if (e.target === headerHomeBtn) {
//       wrapper.classList.remove('wrapper__bg')
//       mainPageElement.classList.add('active')
//       artisQuiz.classList.remove('active')
//       picturesQuiz.classList.remove('active')
//     }
//   }
// // }
// newCategory()













class Question {
  constructor(category) {
    this.category = category
    this.questions = document.querySelector('.quiz__questions')
    this.popup = document.querySelector('.popup__answer')
    this.popupNextBtn = document.querySelector('.popup__answer-next')
    this.popupAnswerImg = document.querySelector('.popup__answer-img')
    this.popupAnswerResult = document.querySelector('.popup__answer-img__result')
    this.popupAnswerTitle = document.querySelector('.popup__answer-title')
    this.popupAnswerAuthor = document.querySelector('.popup__answer-author')
    this.popupAnswerYear = document.querySelector('.popup__answer-year')
    this.popupFinal = document.querySelector('.popup__final')
    this.popupChangedScore = document.querySelector('.popup__change-score')
    this.counter = 0
    this.score = 0

    this.popupNextBtn.addEventListener('click', this.setQuestion.bind(this))
  }

  async setQuestion() {
    try {


      const authorsArr = await this.getRandomAutors()
      const raundObj = await this.getRaund()
      let countAuthorsArr = 0
      console.log(raundObj)
      this.questions.innerHTML = `
          <div class="quiz__pictures-category">
          <div class="container">
            <div class="category">
              <div class="line"></div>
              <div class="category__question">Кто автор этой картины?</div>
              <div class="category__img" ></div>
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

      categoryImg.style.backgroundImage = `url('assets/image-data/full/${raundObj.imageNum}full.jpg')`
      this.counter++

      answers.forEach(answer => {
        answer.textContent = authorsArr[countAuthorsArr++]
        answer.addEventListener('click', (e) => {
          this.popupAnswerImg.style.backgroundImage = `url('assets/image-data/img/${raundObj.imageNum}.jpg')`
          this.popupAnswerTitle.textContent = raundObj.name
          this.popupAnswerAuthor.textContent = raundObj.author
          this.popupAnswerYear.textContent = raundObj.year
          this.popup.classList.add('popup--active')

          if (e.target === answer && e.target.textContent === raundObj.author) {
            answer.classList.add('correct-answer')
            this.popupAnswerResult.style.backgroundImage = `url('assets/svg/true.svg')`
            this.score++
          } else {
            answer.classList.add('wrong-answer')
            this.popupAnswerResult.style.backgroundImage = `url('assets/svg/false.svg')`
          }

          if (this.counter === 10) {
            this.popupNextBtn.addEventListener('click', this.showFinalPopup.bind(this))
            this.counter--
            // this.popupNextBtn = document.querySelector('.popup__next-btn').addEventListener('click', () => {
            //   this.popupFinal.classList.remove('popup--active')
            // })
          }
          console.log(this.score)
          console.log(this.counter)
        })
      })

      this.popup.classList.remove('popup--active')
    } catch (error) {
      console.log(error)
    }
  }

  showFinalPopup() {
    this.popupFinal.classList.add('popup--active')
    this.popupChangedScore.textContent = this.score 
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
let asd = new Question('portrait')
asd.setQuestion()










// const categoryImg = document.querySelector('.category__img')
// const categoryAnswer = document.querySelectorAll('.category__answers .category__answer')
// const answer1 = document.querySelector('#a1')
// const answer2 = document.querySelector('#a2')
// const answer3 = document.querySelector('#a3')
// const answer4 = document.querySelector('#a4')

// const category = 'portrait'

// const result = ''

// async function setQuestion(category) {
//   const authorsArr = []
//   const res = await fetch('data.json')
//   const data = await res.json()

//   const arrСategory = data.filter(pic => pic.category === category)


//   const imageNum = arrСategory[0].imageNum
//   const imageAuthor = arrСategory[0].author
//   // const imageNum = 127
//   categoryImg.style.backgroundImage = `url('assets/image-data/full/${imageNum}full.jpg')`


//   let counter = 0

//   for (let i = 0; i < 4 + counter; i++) {
//     let randomAuthor = data[getRandomNumber(data.length)].author

//     if (!authorsArr.includes(randomAuthor)) {
//       authorsArr.push(randomAuthor)
//     } else {
//       counter++
//     }
//   }
//   authorsArr[getRandomNumber(authorsArr.length)] = imageAuthor
//   console.log(authorsArr)

//   answer1.textContent = authorsArr[0]
//   answer2.textContent = authorsArr[1]
//   answer3.textContent = authorsArr[2]
//   answer4.textContent = authorsArr[3]
// }

// setQuestion(category)


// categoryAnswer.forEach(answer => answer.addEventListener('click', ))



// function popup() {

// }




function getRandomNumber(num) {
  return Math.floor(Math.random() * num)
}
// console.log(getRandomNumber(2))


// console.log('portrait', 29)
// console.log('realism', 24)
// console.log('renaissance', 45)
// console.log('impressionism', 16)
// console.log('painting', 24)
// console.log('landscape', 19)
// console.log('marine', 10)
// console.log('avant-garde', 11)
// console.log('surrealism', 10)
// console.log('romanticism', 17)
// console.log('expressionism', 19)
// console.log('religion', 16)

