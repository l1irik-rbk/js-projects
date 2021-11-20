import mainPage from './mainPage.js'

class Settings {
  constructor() {
    this.settings = document.querySelector('.settings')
    this.screen = `
      <div class="container">
        <div class="settings__wrapper">
          <div class="settings__header">
            <div class="settngs__btn">Home</div>
          </div>
          <div class="settings__main">
            <div class="settings__main-volume">
              <label for="volume">Volume</label><div class="volume__btn"></div>
              <input type="range" min="0" max="1" step="0.05" name="volume" id="volume" value="0.2" disabled>
            </div>
            <div class="settings__main-time">
              <label for="time">Time game</label>
              <input id="time" type="checkbox">
            </div>
            <div class="settings__main-change__time">
              <div class="settings__main-change__time-title">Time to answer</div>
              <div class="settings__main-change__time-wrapper">
                <button class="settings__main-change__time-btn minus" type="button"><img src="assets/svg/minus.svg" alt="minus"></button>
                <input class="settings__main-change__time-number" type="number" min="5" max="30" value="5" readonly>
                <button class="settings__main-change__time-btn plus" type="button"><img src="assets/svg/plus.svg" alt="plus"></button>
              </div>               
            </div>
          </div>
        </div>
      </div>
    `
    this.settings.innerHTML = this.screen
    this.settngsBtn = this.settings.querySelector('.settngs__btn')
    this.settings.classList.add('active')
    this.volume = this.settings.querySelector('#volume')
    this.volumeBtn = this.settings.querySelector('.volume__btn')
    this.time = this.settings.querySelector('#time')
    this.timeNumber = this.settings.querySelector('.settings__main-change__time-number')
    this.minus = this.settings.querySelector('.minus')
    this.plus = this.settings.querySelector('.plus')
   
    this.settngsBtn.addEventListener('click', this.goHome.bind(this))
    this.volumeBtn.addEventListener('click', this.toggleSaunds.bind(this))
    this.volume.addEventListener('input', this.saundValue.bind(this))
    this.time.addEventListener('input', this.timeGame.bind(this))
    this.minus.addEventListener('click', this.setTimeOfGame.bind(this))
    this.plus.addEventListener('click', this.setTimeOfGame.bind(this))
    this.setFromLocalStorage()
  }

  goHome() {
    this.settings.classList.remove('active')
    new mainPage()
  }

  toggleSaunds() {
    if (isMuted) {
      isMuted = false
      this.volumeBtn.style.backgroundImage = `url('./assets/svg/sound-on.svg')`
      this.volume.removeAttribute('disabled')
      this.volume.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${saundValue * 100}%, #A4A4A4 ${saundValue * 100}%, #A4A4A4 100%)`
    } else {
      isMuted = true
      this.volumeBtn.style.backgroundImage = `url('./assets/svg/sound-off.svg')`
      this.volume.setAttribute('disabled', 'disabled')
      this.volume.style.background = `linear-gradient(to right, #A4A4A4 0%, ${saundValue * 100}%, #A4A4A4 ${saundValue * 100}%, #A4A4A4 100%)`
    }
  }

  saundValue() {
    saundValue = this.volume.value;
    this.volume.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${saundValue * 100}%, #A4A4A4 ${saundValue * 100}%, #A4A4A4 100%)`
    const testAudio = new Audio('./assets/audio/correct.mp3')
    testAudio.volume = saundValue
    testAudio.play()
    console.log(saundValue)
  }

  timeGame() {
    timeGame = this.time.checked
  }

  setTimeOfGame(e) {
    if (e.currentTarget === this.minus) {
      if (+this.timeNumber.value > 5) {
        this.timeNumber.value = parseInt(this.timeNumber.value) - 5
        timeOfGame = +this.timeNumber.value
      }
    } else if (e.currentTarget === this.plus) {
      if (+this.timeNumber.value < 30) {
        this.timeNumber.value = parseInt(this.timeNumber.value) + 5
        timeOfGame = +this.timeNumber.value
      }
    }
  }

  setFromLocalStorage() {
    getLocalStorage()
    this.timeNumber.value = timeOfGame
    this.time.checked = timeGame
    if (!isMuted) {
      this.volumeBtn.style.backgroundImage = `url('./assets/svg/sound-on.svg')`
      this.volume.removeAttribute('disabled')
      this.volume.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${saundValue * 100}%, #A4A4A4 ${saundValue * 100}%, #A4A4A4 100%)`
    }
  }
}

export let isMuted = true
export let saundValue 
export let timeGame = false
export let timeOfGame = 5  

function setLocalStorage() {
  localStorage.setItem('isMuted', JSON.stringify(isMuted))
  localStorage.setItem('timeGame', JSON.stringify(timeGame))
  localStorage.setItem('saundValue', saundValue)
  localStorage.setItem('timeOfGame', timeOfGame)
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('isMuted')) {
    isMuted = JSON.parse(localStorage.getItem('isMuted'))
  }
  if (localStorage.getItem('timeGame')) {
    timeGame = JSON.parse(localStorage.getItem('timeGame'))
  }
  if (localStorage.getItem('saundValue')) {
    saundValue = localStorage.getItem('saundValue')
  }
  if (localStorage.getItem('timeOfGame')) {
    timeOfGame = localStorage.getItem('timeOfGame')
  }
}
window.addEventListener('load', getLocalStorage)

export default Settings