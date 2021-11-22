import Question from './question';
import Category from './category';
import MainPage from './mainPage';
import { isMuted, saundValue } from './settings';

class Popup {
  constructor(score, raundObj, marker, category, isArtist, counter, quizQuestions, number, categoryText) {
    this.score = score;
    this.raundObj = raundObj;
    this.marker = marker;
    this.counter = counter;
    this.category = category;
    this.isArtist = isArtist;
    this.quizQuestions = quizQuestions;
    this.number = number;
    this.categoryText = categoryText;
    this.popup = document.querySelector('.popup');
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
      `;
    this.popup.innerHTML = this.screen;
    this.popupNextBtn = this.popup.querySelector('.popup__answer-next');
    this.popupAnswerImg = this.popup.querySelector('.popup__answer-img');
    this.popupAnswerResult = this.popup.querySelector('.popup__answer-img__result');
    this.popupAnswerTitle = this.popup.querySelector('.popup__answer-title');
    this.popupAnswerAuthor = this.popup.querySelector('.popup__answer-author');
    this.popupAnswerYear = this.popup.querySelector('.popup__answer-year');
    this.popup.classList.add('active');

    this.setPopup();
    this.popup.querySelector('.popup__content').classList.add('popup--active');
  }

  setPopup() {
    this.counter++;

    // Выводим инофрмацию по раунду в popup
    if (this.marker) {
      this.popupAnswerResult.style.backgroundImage = "url('assets/svg/true.svg')";
    } else {
      this.popupAnswerResult.style.backgroundImage = "url('assets/svg/false.svg')";
    }

    this.popupAnswerImg.style.backgroundImage = `url('assets/image-data/img/${this.raundObj.imageNum}.jpg')`;
    this.popupAnswerTitle.textContent = this.raundObj.name;
    this.popupAnswerAuthor.textContent = this.raundObj.author;
    this.popupAnswerYear.textContent = this.raundObj.year;

    if (this.counter < 10) {
      this.popupNextBtn.addEventListener('click', () => {
        this.quizQuestions.classList.remove('active__page');
        this.quizQuestions.classList.add('deactivate__page');

        this.popup.querySelector('.popup__content').classList.remove('popup--active');
        this.popup.querySelector('.popup__content').classList.add('popup__content-deactivate');
        setTimeout(() => {
          this.quizQuestions.classList.remove('deactivate__page');
          this.popup.querySelector('.popup__content').classList.remove('popup__content-deactivate');
          this.popup.classList.remove('active');
          new Question(this.category, this.isArtist, this.counter, this.score, this.number, this.categoryText);
        }, 1000);
      });
    } else {
      // если this.counter равен 10 выводим финальный popup и выходим в категорию
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
        `;
        if (!isMuted) {
          const audio = new Audio('./assets/audio/game-over.mp3');
          audio.volume = saundValue;
          audio.play();
        }
        const popupHomeBtn = this.popup.querySelector('.popup__home-btn');
        const popupChangedScore = this.popup.querySelector('.popup__change-score');
        const popupNextQuizBtn = this.popup.querySelector('.popup__next-btn');
        popupChangedScore.textContent = this.score;

        popupNextQuizBtn.addEventListener('click', () => {
          this.quizQuestions.classList.remove('active__page');
          this.quizQuestions.classList.add('deactivate__page');

          this.popup.querySelector('.popup__content').classList.remove('popup--active');
          this.popup.querySelector('.popup__content').classList.add('popup__content-deactivate');
          setTimeout(() => {
            this.quizQuestions.classList.remove('deactivate__page');
            this.popup.querySelector('.popup__content').classList.remove('popup__content-deactivate');
            this.popup.classList.remove('active');
            this.quizQuestions.classList.remove('active');
            new Category(this.isArtist, 0, this.categoryText);
          }, 1000);
        });

        popupHomeBtn.addEventListener('click', () => {
          this.quizQuestions.classList.remove('active__page');
          this.quizQuestions.classList.add('deactivate__page');

          this.popup.querySelector('.popup__content').classList.remove('popup--active');
          this.popup.querySelector('.popup__content').classList.add('popup__content-deactivate');
          setTimeout(() => {
            this.quizQuestions.classList.remove('deactivate__page');
            this.popup.querySelector('.popup__content').classList.remove('popup__content-deactivate');
            this.popup.classList.remove('active');
            this.quizQuestions.classList.remove('active');
            new MainPage();
          }, 1000);
        });
      });
    }
  }
}

export default Popup;
