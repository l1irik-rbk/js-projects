function burgerMenu() {
  const btn = document.querySelector('.tickets__btn')
  const btnClose = document.querySelector('.close__btn')
  const drop = document.querySelector('.drop__form')
  const burgerMenu = document.querySelector('.burger__menu')
  const menu = document.querySelector('.menu')
  const welcomTitle = document.querySelector('.welcom__title')
  const welcomText = document.querySelector('.welcom__text')
  const welcomBtn = document.querySelector('.btn')
  const closeButrgerBtn = document.querySelector('.close__butrger-btn')


  btn.addEventListener('click', clickBtn)
  btnClose.addEventListener('click', closeForm)
  burgerMenu.addEventListener('click', burgerMenuClick)
  closeButrgerBtn.addEventListener('click', closeButrgerBtnClick)

  function clickBtn(e) {
    e.preventDefault()
    drop.classList.add('drop__form--active')
  }

  function closeForm(e) {
    e.preventDefault()
    drop.classList.remove('drop__form--active')
  }

  function burgerMenuClick() {
    menu.classList.toggle('menu--active')
    welcomBtn.classList.toggle('hidden')
    welcomTitle.classList.toggle('hidden')
    welcomText.classList.toggle('hidden')
    burgerMenu.classList.toggle('hidden')
    closeButrgerBtn.style.visibility = 'visible'
  }

  function closeButrgerBtnClick() {
    menu.classList.toggle('menu--active')
    welcomBtn.classList.toggle('hidden')
    welcomTitle.classList.toggle('hidden')
    welcomText.classList.toggle('hidden')
    burgerMenu.classList.toggle('hidden')
    closeButrgerBtn.style.visibility = 'hidden'
  }
}
burgerMenu()

function playMainVideo() {
  const videos = document.querySelectorAll('.viewer')
  const playVideoBtn = document.querySelector('.play__video')
  const volumeBtn = document.querySelector('.volume')
  const playVideoImg = document.querySelector('.play__video-img')
  const volumeImg = document.querySelector('.volume-img')
  const range = document.querySelector('.progress2')
  const progress1 = document.querySelector('.progress1')
  const mainVidePlayBtn = document.querySelector('.main-video__play-btn')
  const mainVidePlayImg = document.querySelector('.main-video__play-img')
  const frame = document.querySelector('.frame')

  function changeColorControls() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
  }

  for (let video of videos) {
    function playVideo() {
      if (video.paused) {
        video.play()
        playVideoImg.src = 'assets/svg/pause-min.svg'
        mainVidePlayImg.src = ''
      } else {
        video.pause()
        playVideoImg.src = 'assets/svg/play-video.svg'
        mainVidePlayImg.src = 'assets/svg/main-play.svg'
      }
    }

    function handleProgress() {
      const percent = video.currentTime / video.duration * 100
      progress1.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #fff ${percent}%, white 100%)`
      progress1.value = percent
      if (percent === 100) {
        playVideoImg.src = 'assets/svg/play-video.svg'
        mainVidePlayImg.src = 'assets/svg/main-play.svg'
      }
    }

    function scrub(e) {
      let counter = 1
      const scrubTime = (e.offsetX / progress1.offsetWidth) * video.duration * counter;
      video.currentTime = scrubTime;
    }

    function volumeUpdate() {
      let v = this.value
      video.volume = v / 100
      if (video.volume === 0) {
        volumeImg.src = 'assets/svg/mute.svg'
      } else {
        volumeImg.src = 'assets/svg/volume.svg'
      }
    }

    function offVolume() {
      if (!video.muted) {
        volumeImg.src = 'assets/svg/mute.svg'
        video.muted = true
      } else {
        volumeImg.src = 'assets/svg/volume.svg'
        video.muted = false
      }
    }

    function fullScreen() {
      if (!document.webkitIsFullScreen) {
        video.requestFullscreen()
      }
    }

    let flag = false
    document.addEventListener('keydown', function (e) {
      if (e.code === 'KeyM') {
        offVolume()
      } else if (e.code === 'Space') {
        playVideo()
      } else if (e.code === 'KeyF') {
        fullScreen()
      }
    })


    frame.addEventListener('click', fullScreen)
    mainVidePlayBtn.addEventListener('click', playVideo)
    playVideoBtn.addEventListener('click', playVideo)
    volumeBtn.addEventListener('click', offVolume)
    range.addEventListener('input', volumeUpdate)
    progress1.addEventListener('click', scrub)
    video.addEventListener('click', playVideo)
    video.addEventListener('timeupdate', handleProgress)
  }



  progress1.addEventListener('input', changeColorControls)
  range.addEventListener('input', changeColorControls)
}
playMainVideo()






function sectionTickets() {
  const counterBtnDowns = document.querySelectorAll('.counter__btn-down')
  const counterBtnUps = document.querySelectorAll('.counter__btn-up')
  const numberBasic = document.querySelector('.number__basic')
  const numberSenior = document.querySelector('.number__senior')
  const ticketsSpan = document.querySelector('.tickets__title span')
  const inputPermanent = document.querySelector('.input__permanent')
  const inputTermanent = document.querySelector('.input__termanent')
  const inputCombined = document.querySelector('.input__combined')
  const ticketsLabels = document.querySelectorAll('.tickets__label')
  const numberBasicForm = document.querySelector('.number__basic-form')
  const numberSeniorForm = document.querySelector('.number__senior-form')
  let basic
  let senior

  function counterBtnDownClick() {
    this.nextElementSibling.stepDown()
    if (inputPermanent.checked) {
      basic = 20
      senior = basic / 2
    } else if (inputTermanent.checked) {
      basic = 25
      senior = basic / 2
    } else if (inputCombined.checked) {
      basic = 40
      senior = basic / 2
    }
    let basicValue = basic * numberBasic.value
    let seniorValue = senior * numberSenior.value
    ticketsSpan.innerHTML = calculate(basicValue, seniorValue)
  }

  function counterBtnUpClick() {
    this.previousElementSibling.stepUp()
    if (inputPermanent.checked) {
      basic = 20
      senior = basic / 2
    } else if (inputTermanent.checked) {
      basic = 25
      senior = basic / 2
    } else if (inputCombined.checked) {
      basic = 40
      senior = basic / 2
    }

    let basicValue = basic * numberBasic.value
    let seniorValue = senior * numberSenior.value
    ticketsSpan.innerHTML = calculate(basicValue, seniorValue)
    numberBasicForm.value += numberBasic.value
    numberSeniorForm.value += numberSenior.value
  }

  function calculate(basicValue, seniorValue) {
    return `${basicValue + seniorValue}`
  }

  function newCheckbox() {
    if (inputPermanent.checked) {
      ticketsSpan.innerHTML = `${Number(ticketsSpan.innerHTML) * 1}`
      // inputTermanent.checked = false
      // inputCombined.checked = false
    } else if (inputTermanent.checked) {
      ticketsSpan.innerHTML = `${Number(ticketsSpan.innerHTML) * 1.25}`
      // inputPermanent.checked = false
      // inputCombined.checked = false
    } else if (inputCombined.checked) {
      ticketsSpan.innerHTML = `${Number(ticketsSpan.innerHTML) * 2}`
      // inputPermanent.checked = false
      // inputTermanent.checked = false
    }
  }

  // inputTermanent.addEventListener('click', function () {
  //   if (!inputTermanent.checked) {
  //     inputPermanent.checked = false
  //     inputTermanent.checked = true
  //     inputCombined.checked = false
  //   }

  // })



  counterBtnDowns.forEach(counterBtnDown => counterBtnDown.addEventListener('click', counterBtnDownClick))
  counterBtnUps.forEach(counterBtnUp => counterBtnUp.addEventListener('click', counterBtnUpClick))
  ticketsLabels.forEach(ticketsLabel => ticketsLabel.addEventListener('click', newCheckbox))
}
sectionTickets()
















function exploreSlider() {
  let overlay = document.querySelector('.explore__overlay')

  function compareImages(img) {
    let width = img.offsetWidth
    let height = img.offsetHeight

    img.style.width = `${width / 2}px`

    let slider = document.createElement('div')
    slider.className = 'explore__img__slider'
    img.insertAdjacentElement('beforebegin', slider)
    slider.style.top = `${(height / 2) - (slider.offsetHeight / 2)}px`
    slider.style.left = `${(width / 2) - (slider.offsetWidth / 2)}px`

    slider.addEventListener('mousedown', tocuchSlide)
    window.addEventListener('mouseup', unTocuchSlide)
    slider.addEventListener('touchstart', tocuchSlide)
    window.addEventListener('touchstop', unTocuchSlide)

    let clicked = 0

    function tocuchSlide(e) {
      e.preventDefault()
      clicked = 1
      window.addEventListener('mousemove', slideMove)
      window.addEventListener('touchmove', slideMove)
    }

    function unTocuchSlide() {
      clicked = 0
    }

    function slideMove(e) {
      if (clicked === 0) return false

      let position = getCursorPosition(e)

      if (position < 0) {
        position = 0
      }

      if (position > width) {
        position = width
      }
      slide(position)
    }

    function getCursorPosition(e) {
      e = e || window.event;

      let imgPosition = img.getBoundingClientRect()
      let cursorCoordinate = e.pageX - imgPosition.left
      cursorCoordinate -= window.pageXOffset
      return cursorCoordinate
    }

    function slide(position) {
      img.style.width = `${position}px`
      slider.style.left = `${img.offsetWidth - (slider.offsetWidth / 2)}px`
    }
  }

  compareImages(overlay)
}
exploreSlider()



function mapbox() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibDFpcmlrIiwiYSI6ImNrdWp4dnVhMTE3d2kybm5td3ExeGV4NTYifQ.j7CfQiHGCzE4rjVDt9NuOA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [2.3364, 48.86091],
    zoom: 16,
  });

  const marker1 = new mapboxgl.Marker({ color: 'black' }).setLngLat([2.3364, 48.86091]).addTo(map);
  const marker2 = new mapboxgl.Marker({ color: 'gray' }).setLngLat([2.3333, 48.8602]).addTo(map);
  const marker3 = new mapboxgl.Marker({ color: 'gray' }).setLngLat([2.3397, 48.8607]).addTo(map);
  const marker4 = new mapboxgl.Marker({ color: 'gray' }).setLngLat([2.3330, 48.8619]).addTo(map);
  const marker5 = new mapboxgl.Marker({ color: 'gray' }).setLngLat([2.3365, 48.8625]).addTo(map);


  const nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
  });
  map.addControl(nav, 'top-right');
}
mapbox()


function toTop() {
  const toTopBtn = document.querySelector('.to__top-btn')
  let offset = 1000
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= offset) {
      toTopBtn.classList.add('to__top-btn--active')
    } else {
      toTopBtn.classList.remove('to__top-btn--active')
    }
  })

  toTopBtn.addEventListener('click', function () {
    window.scrollTo(0, 0)
  })
}
toTop()