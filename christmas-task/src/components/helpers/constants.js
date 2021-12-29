import { sorted, filtred, resetBtn, searchField } from '../filter'
import { closePopup } from '../popup/popup'
import { switchPage } from '../pages/pages'
import { snowFlake } from '../snowflake/snowflake'
import { changeBg } from '../change-bg/change-bg'
import { changeTree } from '../change-tree/change-tree'
import { playMusic } from '../music/music'
import { changeGarland } from '../garland/garland'
import { resetTree } from '../tree-toys/tree-toys'

export const MAX_CARDS = 21
export const select = document.querySelector('#select')
export const form = document.querySelector('.filters__forms-btns')
export const color = document.querySelector('.filters__color')
export const size = document.querySelector('.filters__size-checkboxes')
export const favorite = document.querySelector('.filters__size-favorite')
export const reset = document.querySelector('.filters__btn-reset')
export const search = document.querySelector('.filters__top-search')
export const forms = form.querySelectorAll('button')
export const colors = color.querySelectorAll('button')
export const sizes = size.querySelectorAll('input')
export const favorites = favorite.querySelector('input')
export const score = document.querySelector('.filters__top-score')
export const popupText = document.querySelector('.popup__text')
export const popupCloseBtn = document.querySelector('.popup__close-btn')
export const popupAnswer = document.querySelector('.popup__answer')
export const popup = document.querySelector('.popup')
export const popupContent = document.querySelector('.popup__content')
export const mainBtn = document.querySelector('.main__page-btn')
export const toysBtn = document.querySelector('.toys__page-btn')
export const treeBtn = document.querySelector('.tree__page-btn')
export const menuList = document.querySelectorAll('.menu__list-item')
export const mainPage = document.querySelector('.main-page')
export const toysPage = document.querySelector('.toys-page')
export const treePage = document.querySelector('.tree-page')
export const mainPageBtn = document.querySelector('.main-page__btn')
export const main = document.querySelector('main')
export const snowBlock = document.querySelector('.snow')
export const addSnow = document.querySelector('.settings__snow')
export const background = document.querySelector('.background__inner')
export const mainBg = document.querySelector('.center')
export const trees = document.querySelector('.trees__inner')
export const treeBox = document.querySelector('.tree__box')
export const music = document.querySelector('.settings__music')
export const garlands = document.querySelector('.garland__inner')
export const lights = document.querySelector('.lights')
export const resetTreeBtn = document.querySelector('.tree__btn-settings')

select.addEventListener('change', sorted)
form.addEventListener('click', filtred)
color.addEventListener('click', filtred)
size.addEventListener('click', filtred)
favorite.addEventListener('click', filtred)
reset.addEventListener('click', resetBtn)
search.addEventListener('keyup', searchField)
popupCloseBtn.addEventListener('click', closePopup)
mainBtn.addEventListener('click', switchPage)
toysBtn.addEventListener('click', switchPage)
treeBtn.addEventListener('click', switchPage)
mainPageBtn.addEventListener('click', switchPage)
addSnow.addEventListener('click', snowFlake)
background.addEventListener('click', changeBg)
trees.addEventListener('click', changeTree)
music.addEventListener('click', playMusic)
garlands.addEventListener('click', changeGarland)
resetTreeBtn.addEventListener('click', resetTree)

export const CARD_ELEMENT = {
  title: {
    classes: ['card__title', 'title'],
    htmlElement: 'h5'
  },
  cardImage: {
    classes: ['card__img'],
    htmlElement: 'div',
  },
  cardCount: {
    classes: ['card__count'],
    htmlElement: 'p'
  },
  cardYear: {
    classes: ['card__year'],
    htmlElement: 'p',
  },
  cardShape: {
    classes: ['card__shape'],
    htmlElement: 'p',
  },
  cardColor: {
    classes: ['card__color'],
    htmlElement: 'p',
  },
  cardSize: {
    classes: ['card__size'],
    htmlElement: 'p',
  },
  cardBeloved: {
    classes: ['card__beloved'],
    htmlElement: 'p',
  },
  cardFavorites: {
    classes: ['card__favorites'],
    htmlElement: 'div',
  }
}

export const garlandsArr = [
  {numbers: 5, rotate: 65, angle: 12, width: 120, height: 120},
  {numbers: 9, rotate: 60, angle: 8, width: 220, height: 220},
  {numbers: 13, rotate: 55, angle: 6, width: 320, height: 320},
  {numbers: 17, rotate: 58, angle: 4, width: 420, height: 420},
  {numbers: 24, rotate: 58, angle: 3, width: 520, height: 520},
  {numbers: 32, rotate: 52, angle: 2.5, width: 620, height: 620},
]

export const TOY_CARD_ELEMENT = {
  littleCardImage: {
    classes: ['toy'],
    htmlElement: 'img',
  },
  сardCounter: {
    classes: ['toy__counter'],
    htmlElement: 'span',
  },
}
