const time = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const greeting = document.querySelector('.greeting')
const name = document.querySelector('.name')
const body = document.querySelector('body')
const slidePrev = document.querySelector('.slide-prev')
const slideNext = document.querySelector('.slide-next')
let randomNumber = getRandomNum()
let day = 0

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
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = date.toLocaleDateString('en-US', options);
  dateElement.textContent = `${currentDate}`
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






function getRandomNum() {
  return Math.ceil(Math.random() * 20)
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

function getSlideNext() {
  if (randomNumber < 20) {
    randomNumber++
  } else if (randomNumber === 20) {
    randomNumber = 1
  }
  console.log(randomNumber)
  setBg()
}

function getSlidePrev() {
  if (randomNumber > 1) {
    randomNumber--
  } else if (randomNumber === 1) {
    randomNumber = 20
  }
  console.log(randomNumber)
  setBg()
}
slidePrev.addEventListener('click', getSlidePrev)
slideNext.addEventListener('click', getSlideNext)


// const weatherIcon = document.querySelector('.weather-icon')
// const temperature = document.querySelector('.temperature')
// const weatherDescription = document.querySelector('.weather-description')
// const city = document.querySelector('.city')
// const wind = document.querySelector('.wind')
// const humidity = document.querySelector('.humidity')
// const weatherError = document.querySelector('.weather-error')
// let language = 'en'

// if (city.value === '') {
//   city.value = 'Minsk'
// }

// async function getWeather() {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=19edc5a868bc62fece7561f1e2461d19&units=metric`
  
//   try {
//     const res = await fetch(url)
//     const data = await res.json()

//     weatherIcon.className = 'weather-icon owf'
//     weatherIcon.classList.add(`owf-${data.weather[0].id}`)
//     temperature.textContent = `${Math.floor(data.main.temp)}°C`
//     weatherDescription.textContent = data.weather[0].description
//     wind.textContent = `${Math.floor(data.wind.speed)} ${weatherObj[language].speed}`
//     humidity.textContent = `${weatherObj[language].humidity}: ${Math.floor(data.main.humidity)}%`
//     weatherError.textContent = ``
//   } catch (error) {
//     weatherError.textContent = `${weatherObj[language].err} '${city.value}'!`
//     temperature.textContent = ''
//     weatherDescription.textContent = ''
//     wind.textContent = ''
//     humidity.textContent = ''
//   }
// }
// window.addEventListener('load', getWeather)
// city.addEventListener('change', getWeather)

// const greetingTranslation = {
//   ['en']: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
//   ['ru']: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
// }

// const weatherObj = {
//   ['en']: {
//     error: 'Error! Nothing to geocode for',
//     humidity: 'Humidity',
//     speed: 'm/s'
//   },
//   ['ru']: {
//     error: 'Ошибка! Нечего геокодировать для',
//     humidity: 'Влажность',
//     speed: 'м/с'
//   }
// }

// function trtanslateLang(lang = 'en') {
//   greeting.textContent = greetingTranslation[lang][day]
// }
// trtanslateLang(language)





// const changeQuote = document.querySelector('.change-quote')
// const quoteField = document.querySelector('.quote')
// const authorField = document.querySelector('.author')

// async function getQuotes() {
//   const url = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

//   try {
//     const res = await fetch(url)
//     const data = await res.json()
//     let randomNum = getRandomNumberForQuotes()

//     quoteField.textContent = `${data.quotes[randomNum].quote}`
//     authorField.textContent = `${data.quotes[randomNum].author}`

//     function getRandomNumberForQuotes() {
//       return Math.floor(Math.random() * data.quotes.length)
//     }

//   } catch (error) {
//     quoteField.textContent = `Error!`
//     authorField.textContent = `Error!`
//   }


// }
// changeQuote.addEventListener('click', getQuotes)
// window.addEventListener('load', getQuotes)





// import playList from './playList.js'
// function asfasf() {
//   const playPrevBtn = document.querySelector('.play-prev')
//   const play = document.querySelector('.play')
//   const playNextBtn = document.querySelector('.play-next')
//   const playListContainer = document.querySelector('.play-list')

//   let isPlay = false
//   let playNum = 0

//   const audio = new Audio()
//   const constVolume = audio.volume = 0.2

//   function playAudio() {
//     if (!isPlay) {
//       isPlay = true
//       length.textContent = playList[playNum].duration
//       playerNameSong.textContent = playList[playNum].title
//       audio.src = playList[playNum].src
//       list[playNum].classList.add('item-active')
//       audio.currentTime = 0
//       audio.play()
//     } else {
//       isPlay = false
//       audio.pause()
//     }
//   }

//   function pause() {
//     if (isPlay) {
//       play.classList.add('pause')
//     } else {
//       play.classList.remove('pause')
//     }
//   }


//   function toggleBtn() {
//     play.classList.toggle('pause')
//   }

//   function playNext() {
//     if (playNum !== playList.length - 1) {
//       list[playNum].classList.remove('item-active')
//       isPlay = false
//       playNum++
//       volumeProgress.style.width = `${constVolume * 100}%`
//     } else {
//       list[playNum].classList.remove('item-active')
//       isPlay = false
//       playNum = 0
//       volumeProgress.style.width = `${constVolume * 100}%`
//     }

//     playAudio()
//     pause()
//   }

//   function playPrev() {
//     if (playNum !== 0) {
//       list[playNum].classList.remove('item-active')
//       isPlay = false
//       playNum--
//       volumeProgress.style.width = `${constVolume * 100}%`
//     } else {
//       list[playNum].classList.remove('item-active')
//       isPlay = false
//       playNum = playList.length - 1
//       volumeProgress.style.width = `${constVolume * 100}%`
//     }

//     playAudio()
//     pause()
//   }

//   playList.forEach(element => {
//     const li = document.createElement('li')
//     li.classList.add('play-item')
//     li.textContent = `${element.title}`
//     playListContainer.append(li)
//   })

//   const list = document.querySelectorAll('.play-item')




//   audio.addEventListener('ended', playNext)
//   playPrevBtn.addEventListener('click', playPrev)
//   playNextBtn.addEventListener('click', playNext)
//   play.addEventListener('click', playAudio)
//   play.addEventListener('click', toggleBtn)




//   const length = document.querySelector('.length')
//   const current = document.querySelector('.current')
//   const progressBar = document.querySelector('.progress')
//   const playerNameSong = document.querySelector('.player-name-song')
//   const timeline = document.querySelector('.timeline')
//   const volumeBtn = document.querySelector('.volume-btn')
//   const volumeLine = document.querySelector('.volume-line')
//   const volumeProgress = document.querySelector('.volume-progress')
//   let isMudted = false

//   length.textContent = playList[playNum].duration

//   setInterval(() => {
//     progressBar.style.width = `${audio.currentTime / audio.duration * 100}%`
//     current.textContent = progressTime(audio.currentTime)

//   }, 100);

//   function progressTime(time) {
//     let seconds = parseInt(time)
//     let minutes = parseInt(seconds / 60)
//     seconds -= minutes * 60
//     return `${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`
//   }

//   function changeTime(e) {
//     const timelineWidth = window.getComputedStyle(timeline).width
//     const newTime = e.offsetX / parseInt(timelineWidth) * audio.duration
//     audio.currentTime = newTime
//   }

//   function changeVolume(e) {
//     const volumeLineWidth = window.getComputedStyle(volumeLine).width
//     const newVolume = e.offsetX / parseInt(volumeLineWidth)
//     audio.volume = newVolume
//     volumeProgress.style.width = `${newVolume * 100}%`

//     if (!newVolume) {
//       volumeBtn.classList.add('mute-btn')
//     } else {
//       volumeBtn.classList.remove('mute-btn')
//     }
//     return newVolume
//   }

//   function toggleVolume() {
//     if (!audio.muted) {
//       audio.muted = true
//     } else {
//       audio.muted = false
//     }
//     volumeBtn.classList.toggle('mute-btn')
//   }

//   volumeBtn.addEventListener('click', toggleVolume)
//   timeline.addEventListener('click', changeTime)
//   volumeLine.addEventListener('click', changeVolume)
// }
// asfasf()



