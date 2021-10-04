// $('.video__inner').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   dots: true,
// });

const btn = document.querySelector('.tickets__btn')
const btnClose = document.querySelector('.close__btn')
const drop = document.querySelector('.drop__form')

btn.addEventListener('click', clickBtn)
btnClose.addEventListener('click', closeForm)

function clickBtn() {
  drop.classList.add('drop__form--active')
}

function closeForm() {
  drop.classList.remove('drop__form--active')
}
