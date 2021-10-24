// Time and date

const time = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const greeting = document.querySelector('.greeting')
const name = document.querySelector('.name')
const body = document.querySelector('body')
const slidePrev = document.querySelector('.slide-prev')
const slideNext = document.querySelector('.slide-next')
const en = document.querySelector('.en')
const ru = document.querySelector('.ru')
let randomNumber = getRandomNum(20)
let day = 0
let language = 'en'


function showTime() {
  const date = new Date()
  const currentTime = date.toLocaleTimeString()
  time.textContent = `${currentTime}`
  showDate()
  getTimeOfDay()
  setTimeout(showTime, 1000)
}
showTime()

function showDate() {
  const date = new Date()
  let options
  let currentDate

  if (language === 'en') {
    options = { weekday: 'long', month: 'long', day: 'numeric' };
    currentDate = date.toLocaleDateString('en-US', options);
    dateElement.textContent = `${currentDate}`
  } else if (language === 'ru') {
    options = { weekday: 'long', day: 'numeric', month: 'long' };
    currentDate = date.toLocaleDateString('ru-RU', options);
    dateElement.textContent = `${currentDate}`
  }
}


// Greeting

function getTimeOfDay() {
  const date = new Date()
  const hours = date.getHours()

  if (hours >= 6 && hours < 12) {
    day = 0
    return 'morning'
  } else if (hours >= 12 && hours < 18) {
    day = 1
    return 'afternoon'
  } else if (hours >= 18) {
    day = 2
    return 'evening'
  } else if (hours < 6) {
    day = 3
    return 'night'
  }
}

function showGreeting() {
  const timeOfDay = getTimeOfDay()
  const greetingText = `Good ${timeOfDay}`
  greeting.textContent = greetingText
}
showGreeting()


// localStorage name, sity

function setLocalStorage() {
  localStorage.setItem('name', name.value)
  localStorage.setItem('city', city.value)
}

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name')
  }

  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city')
  }
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)


// Bg from github

function getRandomNum(num) {
  return Math.ceil(Math.random() * num)
}

function setBg() {
  let timeOfDay = getTimeOfDay()
  let bgNum = randomNumber.toString()
  if (bgNum < 10) {
    bgNum = bgNum.padStart(2, '0')
  }

  const img = new Image()
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`

  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
  }
}

function changeImage() {
  function getSlideNext() {
    if (randomNumber < 20) {
      randomNumber++
    } else if (randomNumber === 20) {
      randomNumber = 1
    }

    if (github.classList.contains('photo-from-active')) {
      setBg()
    } else if (unsplash.classList.contains('photo-from-active')) {
      getLinkToImageUnsplah()
    } else if (flickr.classList.contains('photo-from-active')) {
      getLinkToImageFlickr()
    }

  }

  function getSlidePrev() {
    if (randomNumber > 1) {
      randomNumber--
    } else if (randomNumber === 1) {
      randomNumber = 20
    }

    if (github.classList.contains('photo-from-active')) {
      setBg()
    } else if (unsplash.classList.contains('photo-from-active')) {
      getLinkToImageUnsplah()
    } else if (flickr.classList.contains('photo-from-active')) {
      getLinkToImageFlickr()
    }
  }
  slidePrev.addEventListener('click', getSlidePrev)
  slideNext.addEventListener('click', getSlideNext)
}


// Weather

const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const city = document.querySelector('.city')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const weatherError = document.querySelector('.weather-error')


if (city.value === '') {
  city.value = 'Minsk'
}

async function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=19edc5a868bc62fece7561f1e2461d19&units=metric`

  try {
    const res = await fetch(url)
    const data = await res.json()

    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${Math.floor(data.main.temp)}°C`
    weatherDescription.textContent = data.weather[0].description
    wind.textContent = `${Math.floor(data.wind.speed)} ${weatherObj[language].speed}`
    humidity.textContent = `${weatherObj[language].humidity}: ${Math.floor(data.main.humidity)}%`
    weatherError.textContent = ``
  } catch (error) {
    weatherError.textContent = `${weatherObj[language].error} '${city.value}'!`
    temperature.textContent = ''
    weatherDescription.textContent = ''
    wind.textContent = ''
    humidity.textContent = ''
  }
}
window.addEventListener('load', getWeather)
city.addEventListener('change', getWeather)


// Quotes

const changeQuote = document.querySelector('.change-quote')
const quoteField = document.querySelector('.quote')
const authorField = document.querySelector('.author')

async function getQuotes() {
  let url
  if (language === 'en') {
    url = 'js/quotes_en.json'
  } else if (language === 'ru') {
    url = 'js/quotes_ru.json'
  }

  try {
    const res = await fetch(url)
    const data = await res.json()
    let randomNum = getRandomNumberForQuotes()

    quoteField.textContent = `${data[randomNum].text}`
    authorField.textContent = `${data[randomNum].author}`

    function getRandomNumberForQuotes() {
      return Math.floor(Math.random() * data.length)
    }

  } catch (error) {
    quoteField.textContent = `Error!`
    authorField.textContent = `Error!`
  }


}
changeQuote.addEventListener('click', getQuotes)
window.addEventListener('load', getQuotes)


// Player

import playList from './playList.js'
function audioPlayer() {
  const playPrevBtn = document.querySelector('.play-prev')
  const play = document.querySelector('.play')
  const playNextBtn = document.querySelector('.play-next')
  const playListContainer = document.querySelector('.play-list')

  let isPlay = false
  let playNum = 0

  const audio = new Audio()
  const constVolume = audio.volume = 0.2

  function playAudio() {
    if (!isPlay) {
      isPlay = true
      length.textContent = playList[playNum].duration
      playerNameSong.textContent = playList[playNum].title
      audio.src = playList[playNum].src
      list[playNum].classList.add('item-active')
      audio.currentTime = 0
      audio.play()
    } else {
      isPlay = false
      audio.pause()
    }
  }

  function pause() {
    if (isPlay) {
      play.classList.add('pause')
    } else {
      play.classList.remove('pause')
    }
  }


  function toggleBtn() {
    play.classList.toggle('pause')
  }

  function playNext() {
    if (playNum !== playList.length - 1) {
      list[playNum].classList.remove('item-active')
      isPlay = false
      playNum++
      volumeProgress.style.width = `${constVolume * 100}%`
    } else {
      list[playNum].classList.remove('item-active')
      isPlay = false
      playNum = 0
      volumeProgress.style.width = `${constVolume * 100}%`
    }

    playAudio()
    pause()
  }

  function playPrev() {
    if (playNum !== 0) {
      list[playNum].classList.remove('item-active')
      isPlay = false
      playNum--
      volumeProgress.style.width = `${constVolume * 100}%`
    } else {
      list[playNum].classList.remove('item-active')
      isPlay = false
      playNum = playList.length - 1
      volumeProgress.style.width = `${constVolume * 100}%`
    }

    playAudio()
    pause()
  }

  playList.forEach(element => {
    const li = document.createElement('li')
    li.classList.add('play-item')
    li.textContent = `${element.title}`
    playListContainer.append(li)
  })

  const list = document.querySelectorAll('.play-item')

  audio.addEventListener('ended', playNext)
  playPrevBtn.addEventListener('click', playPrev)
  playNextBtn.addEventListener('click', playNext)
  play.addEventListener('click', playAudio)
  play.addEventListener('click', toggleBtn)


  const length = document.querySelector('.length')
  const current = document.querySelector('.current')
  const progressBar = document.querySelector('.progress')
  const playerNameSong = document.querySelector('.player-name-song')
  const timeline = document.querySelector('.timeline')
  const volumeBtn = document.querySelector('.volume-btn')
  const volumeLine = document.querySelector('.volume-line')
  const volumeProgress = document.querySelector('.volume-progress')
  let isMudted = false

  length.textContent = playList[playNum].duration

  setInterval(() => {
    progressBar.style.width = `${audio.currentTime / audio.duration * 100}%`
    current.textContent = progressTime(audio.currentTime)

  }, 100);

  function progressTime(time) {
    let seconds = parseInt(time)
    let minutes = parseInt(seconds / 60)
    seconds -= minutes * 60
    return `${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`
  }

  function changeTime(e) {
    const timelineWidth = window.getComputedStyle(timeline).width
    const newTime = e.offsetX / parseInt(timelineWidth) * audio.duration
    audio.currentTime = newTime
  }

  function changeVolume(e) {
    const volumeLineWidth = window.getComputedStyle(volumeLine).width
    const newVolume = e.offsetX / parseInt(volumeLineWidth)
    audio.volume = newVolume
    volumeProgress.style.width = `${newVolume * 100}%`

    if (!newVolume) {
      volumeBtn.classList.add('mute-btn')
    } else {
      volumeBtn.classList.remove('mute-btn')
    }
    return newVolume
  }

  function toggleVolume() {
    if (!audio.muted) {
      audio.muted = true
    } else {
      audio.muted = false
    }
    volumeBtn.classList.toggle('mute-btn')
  }

  volumeBtn.addEventListener('click', toggleVolume)
  timeline.addEventListener('click', changeTime)
  volumeLine.addEventListener('click', changeVolume)
}
audioPlayer()


// Setting show/hide

const player = document.querySelector('.player')
const weather = document.querySelector('.weather')
const footerQuote = document.querySelector('.footer-quote')
const greetingContainer = document.querySelector('.greeting-container')
const timeShow = document.querySelector('.time-show')
const timeHide = document.querySelector('.time-hide')
const dateShow = document.querySelector('.date-show')
const dateHide = document.querySelector('.date-hide')
const greetingShow = document.querySelector('.greeting-show')
const greetingHide = document.querySelector('.greeting-hide')
const quoteShow = document.querySelector('.quote-show')
const quoteHide = document.querySelector('.quote-hide')
const weatherShow = document.querySelector('.weather-show')
const weatherHide = document.querySelector('.weather-hide')
const playerShow = document.querySelector('.player-show')
const playerHide = document.querySelector('.player-hide')
const settingsLangText = document.querySelector('.settings-lang_text')
const showHideText = document.querySelector('.show-hide-text')
const showTimeText = document.querySelector('.show-time-text')
const showDateText = document.querySelector('.show-date-text')
const showGreetingText = document.querySelector('.show-greeting-text')
const showQuoteText = document.querySelector('.show-quote-text')
const showWeatherText = document.querySelector('.show-weather-text')
const showPlayerText = document.querySelector('.show-player-text')
const photoFromTitle = document.querySelector('.photo-from-title')
const tagTitle = document.querySelector('.tag-title')

function showElement(e) {
  if (e.target === timeShow) {
    timeHide.classList.remove('active-show')
    timeShow.classList.add('active-show')
    time.classList.remove('hidden')
  } else if (e.target === dateShow) {
    dateHide.classList.remove('active-show')
    dateShow.classList.add('active-show')
    dateElement.classList.remove('hidden')
  } else if (e.target === greetingShow) {
    greetingHide.classList.remove('active-show')
    greetingShow.classList.add('active-show')
    greetingContainer.classList.remove('hidden')
  } else if (e.target === quoteShow) {
    quoteHide.classList.remove('active-show')
    quoteShow.classList.add('active-show')
    footerQuote.classList.remove('hidden')
  } else if (e.target === weatherShow) {
    weatherHide.classList.remove('active-show')
    weatherShow.classList.add('active-show')
    weather.classList.remove('hidden')
  } else if (e.target === playerShow) {
    playerHide.classList.remove('active-show')
    playerShow.classList.add('active-show')
    player.classList.remove('hidden')
  }
}

function hideElement(e) {
  if (e.target === timeHide) {
    timeShow.classList.remove('active-show')
    timeHide.classList.add('active-show')
    time.classList.add('hidden')
  } else if (e.target === dateHide) {
    dateShow.classList.remove('active-show')
    dateHide.classList.add('active-show')
    dateElement.classList.add('hidden')
  } else if (e.target === greetingHide) {
    greetingShow.classList.remove('active-show')
    greetingHide.classList.add('active-show')
    greetingContainer.classList.add('hidden')
  } else if (e.target === quoteHide) {
    quoteShow.classList.remove('active-show')
    quoteHide.classList.add('active-show')
    footerQuote.classList.add('hidden')
  } else if (e.target === weatherHide) {
    weatherShow.classList.remove('active-show')
    weatherHide.classList.add('active-show')
    weather.classList.add('hidden')
  } else if (e.target === playerHide) {
    playerShow.classList.remove('active-show')
    playerHide.classList.add('active-show')
    player.classList.add('hidden')
  }
}

timeShow.addEventListener('click', showElement)
timeHide.addEventListener('click', hideElement)
dateShow.addEventListener('click', showElement)
dateHide.addEventListener('click', hideElement)
greetingShow.addEventListener('click', showElement)
greetingHide.addEventListener('click', hideElement)
quoteShow.addEventListener('click', showElement)
quoteHide.addEventListener('click', hideElement)
weatherShow.addEventListener('click', showElement)
weatherHide.addEventListener('click', hideElement)
playerShow.addEventListener('click', showElement)
playerHide.addEventListener('click', hideElement)


// Unsplah, Flickr

const github = document.querySelector('.github')
const unsplash = document.querySelector('.unsplash')
const flickr = document.querySelector('.flickr')
const tagInput = document.querySelector('.tag-input')

function choiceImageFrom(e) {
  console.log(e.target)
  if (e.target === github) {
    unsplash.classList.remove('photo-from-active')
    flickr.classList.remove('photo-from-active')
    github.classList.add('photo-from-active')
    setBg()
    changeImage()
  } else if (e.target === unsplash) {
    github.classList.remove('photo-from-active')
    flickr.classList.remove('photo-from-active')
    unsplash.classList.add('photo-from-active')
    getLinkToImageUnsplah()
    changeImage()
  } else if (e.target === flickr) {
    unsplash.classList.remove('photo-from-active')
    github.classList.remove('photo-from-active')
    flickr.classList.add('photo-from-active')
    getLinkToImageFlickr()
    changeImage()
  }
}

github.addEventListener('click', choiceImageFrom)
unsplash.addEventListener('click', choiceImageFrom)
flickr.addEventListener('click', choiceImageFrom)

async function getLinkToImageUnsplah() {
  let url
  let input = tagInput.value
  let timeOfDayUnsplah = getTimeOfDay()

  if (input) {
    url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tagInput.value}&client_id=_hLfdnF5tYP0XnH5dq5krK8I3WW72RPxCOq9--51urI`
  } else if (!input) {
    url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDayUnsplah}&client_id=_hLfdnF5tYP0XnH5dq5krK8I3WW72RPxCOq9--51urI`
  }

  try {
    const res = await fetch(url)
    const data = await res.json()
    body.style.backgroundImage = `url('${data.urls.regular}')`

  } catch (error) {
    console.log('Error!')
  }

}

async function getLinkToImageFlickr() {
  let url
  let timeOfDayFlickr = getTimeOfDay()
  let input = tagInput.value

  if (input) {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${input}&extras=url_l&format=json&nojsoncallback=1`
  } else if (!input) {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${timeOfDayFlickr}&extras=url_l&format=json&nojsoncallback=1`
  }

  try {
    const res = await fetch(url)
    const data = await res.json()
    let randomNum = getRandomNum(data.photos.photo.length)
    body.style.backgroundImage = `url('${data.photos.photo[randomNum].url_l}')`

  } catch (error) {
    console.log('Error!')
  }

}


// Language

const greetingTranslation = {
  ['en']: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
  ['ru']: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
}

const weatherObj = {
  ['en']: {
    error: 'Error! Nothing to geocode for',
    humidity: 'Humidity',
    speed: 'm/s'
  },
  ['ru']: {
    error: 'Ошибка! Нечего геокодировать для',
    humidity: 'Влажность',
    speed: 'м/с'
  }
}

const settingsObj = {
  ['en']: {
    show: 'Show',
    hide: 'Hide',
    lang: 'Choose language',
    showHide: 'Show/Hide',
    time: 'Time',
    date: 'Date',
    greeting: 'Greeting',
    quote: 'Quote',
    weather: 'Weather',
    player: 'Audo player',
    bgInmg: 'Background image from',
    tag: 'Enter your tag for API',
    tagPlaceholder: '[Enter tag]',
    cityPlaceholder: '[Enter sity]',
    namePlaceholder: '[Enter name]',
  },
  ['ru']: {
    show: 'Показать',
    hide: 'Спрятать',
    lang: 'Выберите язык',
    showHide: 'Показать/Спрятать',
    time: 'Время',
    date: 'Дата',
    greeting: 'Приветствие',
    quote: 'Цитата',
    weather: 'Погода',
    player: 'Аудио проигрыватель',
    bgInmg: 'Фон страницы',
    tag: 'Введите ваш тег для API',
    tagPlaceholder: '[Введите тег]',
    cityPlaceholder: '[Введите город]',
    namePlaceholder: '[Введите имя]',
  }
}

function trtanslateLang(lang = 'en') {
  greeting.textContent = greetingTranslation[lang][day]
  timeShow.textContent = settingsObj[lang].show
  timeHide.textContent = settingsObj[lang].hide
  dateShow.textContent = settingsObj[lang].show
  dateHide.textContent = settingsObj[lang].hide
  greetingShow.textContent = settingsObj[lang].show
  greetingHide.textContent = settingsObj[lang].hide
  quoteShow.textContent = settingsObj[lang].show
  quoteHide.textContent = settingsObj[lang].hide
  weatherShow.textContent = settingsObj[lang].show
  weatherHide.textContent = settingsObj[lang].hide
  playerShow.textContent = settingsObj[lang].show
  playerHide.textContent = settingsObj[lang].hide
  settingsLangText.textContent = settingsObj[lang].lang
  showHideText.textContent = settingsObj[lang].showHide
  showTimeText.textContent = settingsObj[lang].time
  showDateText.textContent = settingsObj[lang].date
  showGreetingText.textContent = settingsObj[lang].greeting
  showQuoteText.textContent = settingsObj[lang].quote
  showWeatherText.textContent = settingsObj[lang].weather
  showPlayerText.textContent = settingsObj[lang].player
  photoFromTitle.textContent = settingsObj[lang].bgInmg
  tagTitle.textContent = settingsObj[lang].tag
  tagInput.placeholder = settingsObj[lang].tagPlaceholder
  name.placeholder = settingsObj[lang].namePlaceholder
  city.placeholder = settingsObj[lang].cityPlaceholder
}

const gearBtn = document.querySelector('.gear')
const settings = document.querySelector('.settings')

function showSettings() {
  settings.classList.toggle('settings-active')
  gearBtn.classList.toggle('gear-rotate')
}

function enClick() {
  ru.classList.remove('active-lang')
  en.classList.add('active-lang')
  language = 'en'
  getWeather()
  showDate()
  trtanslateLang(language)
  getQuotes()
}

function ruClick() {
  en.classList.remove('active-lang')
  ru.classList.add('active-lang')
  language = 'ru'
  getWeather()
  showDate()
  trtanslateLang(language)
  getQuotes()
}

en.addEventListener('click', enClick)
ru.addEventListener('click', ruClick)
gearBtn.addEventListener('click', showSettings)


// localStorage settings

function setNewLocalStorage() {
  localStorage.setItem('tag', tagInput.value)
  localStorage.setItem('ru', ru.classList.contains('active-lang'))
  localStorage.setItem('en', en.classList.contains('active-lang'))
  localStorage.setItem('weatherDescription', weatherDescription.textContent)
  localStorage.setItem('github', github.classList.contains('photo-from-active'))
  localStorage.setItem('unsplash', unsplash.classList.contains('photo-from-active'))
  localStorage.setItem('flickr', flickr.classList.contains('photo-from-active'))
  localStorage.setItem('timeShow', timeShow.classList.contains('active-show'))
  localStorage.setItem('timeHide', timeHide.classList.contains('active-show'))
  localStorage.setItem('dateShow', dateShow.classList.contains('active-show'))
  localStorage.setItem('dateHide', dateHide.classList.contains('active-show'))
  localStorage.setItem('greetingShow', greetingShow.classList.contains('active-show'))
  localStorage.setItem('greetingHide', greetingHide.classList.contains('active-show'))
  localStorage.setItem('quoteShow', quoteShow.classList.contains('active-show'))
  localStorage.setItem('quoteHide', quoteHide.classList.contains('active-show'))
  localStorage.setItem('weatherShow', weatherShow.classList.contains('active-show'))
  localStorage.setItem('weatherHide', weatherHide.classList.contains('active-show'))
  localStorage.setItem('playerShow', playerShow.classList.contains('active-show'))
  localStorage.setItem('playerHide', playerHide.classList.contains('active-show'))
}

function getNewLocalStorage() {
  if (localStorage.getItem('tag')) {
    tagInput.value = localStorage.getItem('tag')
  }

  if (localStorage.ru === 'true') {
    ruClick()
  }

  if (localStorage.en === 'true') {
    enClick()
  }

  if (localStorage.timeShow === 'true') {
    time.style.transition = 'all .8s'
    timeHide.classList.remove('active-show')
    timeShow.classList.add('active-show')
    time.classList.remove('hidden')
  }

  if (localStorage.timeHide === 'true') {
    time.style.transition = 'all 0s'
    timeShow.classList.remove('active-show')
    timeHide.classList.add('active-show')
    time.classList.add('hidden')
  }

  if (localStorage.dateShow === 'true') {
    dateElement.style.transition = 'all .8s'
    dateHide.classList.remove('active-show')
    dateShow.classList.add('active-show')
    dateElement.classList.remove('hidden')
  }

  if (localStorage.dateHide === 'true') {
    dateElement.style.transition = 'all 0s'
    dateShow.classList.remove('active-show')
    dateHide.classList.add('active-show')
    dateElement.classList.add('hidden')
  }

  if (localStorage.greetingShow === 'true') {
    greetingContainer.style.transition = 'all .8s'
    greetingHide.classList.remove('active-show')
    greetingShow.classList.add('active-show')
    greetingContainer.classList.remove('hidden')
  }

  if (localStorage.greetingHide === 'true') {
    greetingContainer.style.transition = 'all 0s'
    greetingShow.classList.remove('active-show')
    greetingHide.classList.add('active-show')
    greetingContainer.classList.add('hidden')
  }

  if (localStorage.quoteShow === 'true') {
    footerQuote.style.transition = 'all .8s'
    quoteHide.classList.remove('active-show')
    quoteShow.classList.add('active-show')
    footerQuote.classList.remove('hidden')
  }

  if (localStorage.quoteHide === 'true') {
    footerQuote.style.transition = 'all 0s'
    quoteShow.classList.remove('active-show')
    quoteHide.classList.add('active-show')
    footerQuote.classList.add('hidden')
  }

  if (localStorage.weatherShow === 'true') {
    weather.style.transition = 'all .8s'
    weatherHide.classList.remove('active-show')
    weatherShow.classList.add('active-show')
    weather.classList.remove('hidden')
  }

  if (localStorage.weatherHide === 'true') {
    weather.style.transition = 'all 0s'
    weatherShow.classList.remove('active-show')
    weatherHide.classList.add('active-show')
    weather.classList.add('hidden')
  }

  if (localStorage.playerShow === 'true') {
    player.style.transition = 'all .8s'
    playerHide.classList.remove('active-show')
    playerShow.classList.add('active-show')
    player.classList.remove('hidden')
  }

  if (localStorage.playerHide === 'true') {
    player.style.transition = 'all 0s'
    playerShow.classList.remove('active-show')
    playerHide.classList.add('active-show')
    player.classList.add('hidden')
  }

  if (localStorage.github === 'true') {
    setBg()
    changeImage()
    github.classList.add('photo-from-active')
    unsplash.classList.remove('photo-from-active')
    flickr.classList.remove('photo-from-active')
  }

  if (localStorage.unsplash === 'true') {
    getLinkToImageUnsplah()
    changeImage()
    github.classList.remove('photo-from-active')
    unsplash.classList.add('photo-from-active')
    flickr.classList.remove('photo-from-active')
  }

  if (localStorage.flickr === 'true') {
    getLinkToImageFlickr()
    changeImage()
    github.classList.remove('photo-from-active')
    unsplash.classList.remove('photo-from-active')
    flickr.classList.add('photo-from-active')
  }

}

window.addEventListener('beforeunload', setNewLocalStorage)
window.addEventListener('load', getNewLocalStorage)