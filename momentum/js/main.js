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
setBg()

function changeImageGithub() {
  function getSlideNext() {
    if (randomNumber < 20) {
      randomNumber++
    } else if (randomNumber === 20) {
      randomNumber = 1
    }

    setBg()
  }

  function getSlidePrev() {
    if (randomNumber > 1) {
      randomNumber--
    } else if (randomNumber === 1) {
      randomNumber = 20
    }

    setBg()
  }
  slidePrev.addEventListener('click', getSlidePrev)
  slideNext.addEventListener('click', getSlideNext)
}
changeImageGithub()




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





import playList from './playList.js'
function asfasf() {
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
asfasf()












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

function trtanslateLang(lang = 'en') {
  greeting.textContent = greetingTranslation[lang][day]
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


const github = document.querySelector('.github')
const unsplash = document.querySelector('.unsplash')
const flickr = document.querySelector('.flickr')

function choiceImageFrom(e) {
  if (e.target === github) {
    unsplash.classList.remove('photo-from-active')
    flickr.classList.remove('photo-from-active')
    github.classList.add('photo-from-active')
    setBg()
  } else if (e.target === unsplash) {
    github.classList.remove('photo-from-active')
    flickr.classList.remove('photo-from-active')
    unsplash.classList.add('photo-from-active')
    getLinkToImageUnsplah()
  } else if (e.target === flickr) {
    unsplash.classList.remove('photo-from-active')
    github.classList.remove('photo-from-active')
    flickr.classList.add('photo-from-active')
    getLinkToImageFlickr()
  }
}

github.addEventListener('click', choiceImageFrom)
unsplash.addEventListener('click', choiceImageFrom)
flickr.addEventListener('click', choiceImageFrom)


async function getLinkToImageUnsplah() {
  let timeOfDayUnsplah = getTimeOfDay()
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDayUnsplah}&client_id=VywgysqUDvbbK0P7RQ21ln0LJgopoS8O7LJSgX_2tyA`

  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.urls.regular)
    body.style.backgroundImage = `url('${data.urls.regular}')`
  } catch (error) {
    console.log('Error!')
  }

}

async function getLinkToImageFlickr() {
  let timeOfDayFlickr = getTimeOfDay()
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${timeOfDayFlickr}&extras=url_l&format=json&nojsoncallback=1`

  try {
    const res = await fetch(url)
    const data = await res.json()
    let randomNum = getRandomNum(data.photos.photo.length)
    body.style.backgroundImage = `url('${data.photos.photo[randomNum].url_l}')`
  } catch (error) {
    console.log('Error!')
  }

}