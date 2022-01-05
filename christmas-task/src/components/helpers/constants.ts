import { sorted, filtred, resetBtn, searchField } from '../filter';
import { closePopup } from '../popup/popup';

export const CARD_ELEMENT = {
  title: {
    classes: ['card__title', 'title'],
    htmlElement: 'h5',
  },
  cardImage: {
    classes: ['card__img'],
    htmlElement: 'div',
  },
  cardCount: {
    classes: ['card__count'],
    htmlElement: 'p',
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
  },
};

export const MIN_YEAR = 1940;
export const MAX_YEAR = 2020;
export const MIN_COUNT = 1;
export const MACX_COUNT = 12;

export const MAX_CARDS = 21;
export const select = document.querySelector('#select') as HTMLSelectElement;
export const form = document.querySelector('.filters__forms-btns') as HTMLElement;
export const color = document.querySelector('.filters__color') as HTMLElement;
export const size = document.querySelector('.filters__size-checkboxes') as HTMLElement;
export const favorite = document.querySelector('.filters__size-favorite') as HTMLElement;
export const reset = document.querySelector('.filters__btn-reset') as HTMLElement;
export const search = document.querySelector('.filters__top-search') as HTMLInputElement;
export const forms = form.querySelectorAll('button');
export const colors = color.querySelectorAll('button');
export const sizes = size.querySelectorAll('input');
export const favorites = favorite.querySelector('input') as HTMLInputElement;
export const score = document.querySelector('.filters__top-score') as HTMLElement;
export const popupText = document.querySelector('.popup__text') as HTMLElement;
export const popupCloseBtn = document.querySelector('.popup__close-btn') as HTMLElement;
export const popupAnswer = document.querySelector('.popup__answer') as HTMLElement;

select.addEventListener('change', sorted);
form.addEventListener('click', filtred);
color.addEventListener('click', filtred);
size.addEventListener('click', filtred);
favorite.addEventListener('click', filtred);
reset.addEventListener('click', resetBtn);
search.addEventListener('keyup', searchField);
popupCloseBtn.addEventListener('click', closePopup);
