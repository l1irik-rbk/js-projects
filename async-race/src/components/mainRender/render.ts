import { IRender, IText } from '../helpers/interfaces';
import { HEADER_BTNS, PAGES_BTNS, MAX_CARS_ON_PAGE, MAX_WINNERS_ON_PAGE } from '../helpers/constants';

import store from '../store/store';
import { addListener } from '../helpers/listeners';
import { getCars, getWinners } from '../api/api';
import { renderWinners } from '../winnersView/renderWinners/renderWinners';
import { renderCarSettings, renderGarage } from '../garageView/renderGarage/renderGarage';
import { getNextBtn, getPrevBtn } from '../helpers/getElements';

export const renderHeaderBtns = (): void => {
  const headerBtns = document.querySelector('.header__btns') as HTMLElement;
  defaultRender(HEADER_BTNS, headerBtns);
};

export const renderPagesBtn = (): void => {
  const pagesBtn = document.querySelector('.pages__btn') as HTMLElement;
  defaultRender(PAGES_BTNS, pagesBtn);
};

export const renderView = (): void => {
  if (store.veiw === 'garage') {
    renderCarSettings();
    renderGarage();
  } else {
    renderWinners();
  }
};

export const render = (): void => {
  const html = `
    <div class="header__btns"></div>
    <div class="garage__container"></div>
    <div class="winners"></div>
    <div class="pages__btn"></div>
    <div class="winner"></div>
  `;
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = html;
  document.body.append(container);
  renderHeaderBtns();
  renderView();
  renderPagesBtn();
};

export const checkPage = (prevBtn: HTMLButtonElement, nextBtn: HTMLButtonElement, maxPage: number): void => {
  let count: number;
  let page: number;

  if (store.veiw === 'garage') {
    count = store.carsCount;
    page = store.carsPage;
  } else {
    count = store.winnersCount;
    page = store.winnersPage;
  }

  if (count > MAX_CARS_ON_PAGE && page !== maxPage) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }

  if (page > 1) {
    prevBtn.disabled = false;
  } else {
    prevBtn.disabled = true;
  }
};

export const updateGarage = async (): Promise<void> => {
  const { data, count } = await getCars(store.carsPage);
  const prevBtn = getPrevBtn();
  const nextBtn = getNextBtn();
  store.cars = data;
  store.carsCount = count;
  const maxPage = Math.ceil(store.carsCount / MAX_CARS_ON_PAGE);

  checkPage(prevBtn, nextBtn, maxPage);
};

export const updateWinners = async (): Promise<void> => {
  const { data, count } = await getWinners(store.winnersPage, store.sorted, store.order);
  const prevBtn = document.querySelector('.prev__btn') as HTMLButtonElement;
  const nextBtn = document.querySelector('.next__btn') as HTMLButtonElement;
  store.winners = data;
  store.winnersCount = count;
  const maxPage = Math.ceil(store.winnersCount / MAX_WINNERS_ON_PAGE);

  checkPage(prevBtn, nextBtn, maxPage);
};

export const getText = (name: string): IText => {
  return {
    winnersBtn: 'To winners',
    garageBtn: 'To garage',
    raceBtn: 'Race',
    resetBtn: 'Reset',
    generateBtn: 'Generate cars',
    createBtn: 'Create',
    updateBtn: 'Update',
    garageHeder: `Garage (${store.carsCount})`,
    garagePageHeder: `Page #${store.carsPage}`,
    selectBtn: 'Select',
    removeBtn: 'Remove',
    carName: `${name}`,
    startEngine: 'A',
    stopEngine: 'B',
    prevBtn: 'Prev',
    nextBtn: 'Next',
  };
};

export const defaultRender = (obj: IRender, el: HTMLElement, id = '', name = '', color = ''): void => {
  for (const key in obj) {
    const element = obj[key];
    const htmlElement = document.createElement(element.htmlElement);
    htmlElement.classList.add(...element.classes);
    if (element.htmlElement === 'span') htmlElement.style.color = color;
    if (element.htmlElement === 'car__name') htmlElement.style.color = color;
    if (element.type) htmlElement.setAttribute('type', element.type);
    if (element.value) htmlElement.setAttribute('value', element.value);
    if (element.disabled) (htmlElement as HTMLButtonElement).disabled = true;
    if (element.hasId) htmlElement.setAttribute('car-id', id);
    if (element.hasListener) addListener(htmlElement as HTMLButtonElement, element.classes[1]);
    fillTextContet(key, htmlElement, name);
    el.append(htmlElement);
  }
};

export const fillTextContet = (key: string, htmlElement: HTMLElement, name = ''): void => {
  const text: IText = getText(name);
  for (const el in text) {
    if (el === key) {
      htmlElement.innerHTML = `${text[key]}`;
    }
  }
};
