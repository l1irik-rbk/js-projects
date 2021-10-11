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



console.log(`Ваша оценка - 103 балла 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) если основное видео проигрывалось при перелистывании слайдера, проигрывание видео останавливается, прогресс бар сдвигается к началу, иконки "Play" на панели управления и по центру видео меняются на первоначальные 

2) панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними 

3) Клавиши SHIFT+, (англ) — ускорение воспроизведения ролика 

4) Клавиши SHIFT+. (англ) — замедление воспроизведения ролика 

5) при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания. В качестве образца анимации используйте анимацию на сайте Лувра https://www.louvre.fr/ 

6) если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется 

7) при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется 

8) при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них 

9) когда при клике по кнопке Buy now открывается форма, она уже содержит данные, указанные на странице сайта - количество билетов, их тип, общая цена за них 

10) когда пользователь выбирает дату в форме слева, она отображается в билете справа 

11) нельзя выбрать дату в прошлом 

12) когда пользователь выбирает время в форме слева, оно отображается в билете справа 

13) время можно выбирать с 9:00 до 18:00 с интервалом в 30 минут 

14) можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа 

15) можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа 

16) валидация имени пользователя. Имя пользователя должно содержать от 3 до 15 символов, в качестве символов могут быть использованы буквы английского или русского алфавита в нижнем или верхнем регистре и пробелы 

17) валидация e-mail должна пропукать только адреса вида username@example.com, где: username - имя пользователя, должно содержать от 3 до 15 символов (буквы, цифры, знак подчёркивания, дефис), не должно содержать пробелов; @ - символ собачки; example - домен первого уровня состоит минимум из 4 латинских букв; com - домен верхнего уровня, отделяется от домена первого уровня точкой и состоит минимум из 2 латинских букв 

18) валидация номера телефона: номер содержит только цифры; без разделения или с разделением на две или три цифры; разделение цифр может быть через дефис или пробел; с ограничением по количеству цифр не больше 10 цифр 

19) при попытке ввода в форму невалидного значения выводится предупреждение, например, "номер телефона может содержать только цифры" 

Частично выполненные пункты:
1) если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно 

2) при клике по кнопке "Play" слева внизу на панели видео начинается проигрывание видео, иконка кнопки при этом меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Повторный клик на кнопку останавливает проигрывание видео, иконка меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается 

3) при клике по большой кнопке "Play" по центру видео, или при клике по самому видео, начинается проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Клик на видео, которое проигрывается, останавливает проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается 

4) при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран. При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима. Нажатие на клавишу для выхода из полноэкранного режима Esc не проверяем и не оцениваем 

5) Клавиша F — включение/выключение полноэкранного режима 

6) у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них 

Выполненные пункты:
1) есть возможность перелистывания слайдов влево и вправо кликами по стрелкам 

2) есть возможность перелистывания слайдов влево и вправо свайпами (движениями) мышки 

3) есть возможность перелистывания слайдов кликами по буллетам (квадратики внизу слайдера) 

4) слайды перелистываются плавно с анимацией смещения вправо или влево 

5) перелистывание слайдов бесконечное (зацикленное) 

6) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) 

7) при перелистывании слайдов кликами или свайпами меняется номер активного слайда 

8) даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда 

9) при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят 

10) если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео 

11) есть возможность перелистывания слайдов с видео влево и вправо кликами по стрелкам. Слайды перелистываются по одному, при этом также меняется основное видео 

12) есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), при этом также меняется основное видео 

13) слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного видео анимация смещения не требуется и не проверяется) 

14) перелистывание слайдов бесконечное (зацикленное) 

15) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) 

16) даже при частых кликах по стрелкам нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда 

17) прогресс-бар отображает прогресс проигрывания видео 

18) перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео 

19) если прогресс-бар перетянуть до конца, видео останавливается, соответственно, меняется внешний вид кнопок "Play" 

20) при клике на иконку динамика происходит toggle звука и самой иконки (звук включается или выключается, соответственно изменяется иконка) 

21) при перемещении ползунка громкости звука изменяется громкость видео 

22) если ползунок громкости звука перетянуть до 0, звук выключается, иконка динамика становится зачеркнутой 

23) если при выключенном динамике перетянуть ползунок громкости звука от 0, звук включается, иконка громкости перестаёт быть зачёркнутой 

24) клавиша Пробел — пауза, при повторном нажатии - play 

25) Клавиша M (англ) — отключение/включение звука 

26) ползунок можно перетягивать мышкой по горизонтали 

27) ползунок никогда не выходит за границы картины 

28) при перемещении ползунка справа налево плавно появляется нижняя картина 

29) при перемещении ползунка слева направо плавно появляется верхняя картина 

30) при обновлении страницы ползунок возвращается в исходное положение 

31) при изменении количества билетов Basic и Senior пересчитывается общая цена за них 

32) в секции Contacts добавлена интерактивная карта 

33) на карте отображаются маркеры, расположение и внешний вид маркеров соответствует макету 

34) стиль карты соответствует макету 

35) Любой собственный дополнительный функционал, улучшающий качество проекта. Например, ночная тема, плавная смена изображений в блоке Tickets, всплывающее окно с информацией про картины и их авторов, кнопка прокрутки страницы вверх, возможность проголосовать за понравившиеся картины с сохранением данных в local storage, всё зависит от вашей фантазии и чувства вкуса. Для удобства проверки выполненный вами дополнительный функционал включите в самооценку, которую выведите в консоль браузера 
'Кнопка прокрутки вверх при скорле'
`)