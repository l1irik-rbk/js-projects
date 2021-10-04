// $('.video__inner').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   dots: true,
// });

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

function clickBtn() {
  drop.classList.add('drop__form--active')
}

function closeForm() {
  drop.classList.remove('drop__form--active') 
}

function burgerMenuClick(){
  menu.classList.toggle('menu--active')
  welcomBtn.style.visibility = 'hidden'
  welcomTitle.style.visibility = 'hidden'
  welcomText.style.visibility = 'hidden' 
  burgerMenu.style.visibility = 'hidden' 
  closeButrgerBtn.style.visibility = 'visible' 
}

function closeButrgerBtnClick(){
  menu.classList.toggle('menu--active')
  welcomBtn.style.visibility = 'visible'
  welcomTitle.style.visibility = 'visible'
  welcomText.style.visibility = 'visible' 
  burgerMenu.style.visibility = 'visible' 
  closeButrgerBtn.style.visibility = 'hidden' 
}
