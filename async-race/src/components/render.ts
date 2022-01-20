import { IRender, IData, IText } from './helpers/interfaces';
import {
  HEADER_BTNS,
  SETTINGS_BTNS,
  FORM_CREATE,
  FORM_UPDATE,
  GARAGE_ELEMENT_BTNS,
  CAR_ENGINE_CONTROLS,
  PAGES_BTNS,
  MAX_CARS_ON_PAGE,
} from './helpers/constants';

import store from './store/store';
import { addListener } from './helpers/listeners';
import { getCars } from './api/api';

const getCarImage = (color: string): string => {
  const html = `
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="640.000000pt" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="${color}" stroke="red" stroke-width="60">
        <path stroke="red" d="M3605 5335 c-5 -1 -38 -10 -71 -20 l-62 -17 -7 -79 c-5 -66 -10 -82 -28 -94 -30 -19 -173 -75 -547 -215 -482 -180 -1078 -425 -1215 -500 -148 -81 -230 -105 -410 -120 -71 -6 -173 -19 -225 -30 -143 -28 -342 -49 -558 -56 l-193 -7 -28 -36 c-56 -71 -74 -123 -47 -138 18 -11 36 -47 36 -74 0 -12 -12 -52 -27 -88 -26 -63 -28 -76 -31 -259 l-4 -192 -33 -26 c-68 -51 -103 -126 -135 -284 -24 -113 -25 -187 -5 -298 10 -54 12 -96 6 -120 -5 -26 -2 -72 13 -153 l21 -116 63 -52 c55 -46 87 -84 168 -200 49 -69 293 -133 674 -176 146 -16 517 -42 670 -47 l95 -3 -3 125 c-13 525 321 967 833 1101 79 21 112 24 265 23 155 0 186 -3 271 -26 395 -106 686 -404 790 -807 35 -134 36 -369 3 -565 l-7 -38 2989 7 c1644 4 2992 9 2995 11 3 2 -3 36 -14 76 -17 60 -20 104 -21 253 0 164 2 189 26 277 105 386 401 682 786 786 88 23 114 26 277 26 151 0 192 -4 255 -21 208 -58 351 -137 494 -274 192 -183 303 -402 337 -664 13 -101 6 -257 -15 -350 -8 -33 -12 -63 -10 -67 3 -5 29 -6 57 -3 29 3 115 10 192 16 204 16 345 42 399 73 46 27 95 88 122 152 13 32 13 53 -1 195 -14 143 -14 168 0 247 22 127 45 323 52 432 6 111 -22 282 -59 359 -93 195 -453 342 -1267 516 -817 174 -1442 244 -2181 245 -254 0 -256 1 -373 83 -191 135 -1154 667 -1517 839 -344 163 -740 255 -1320 305 -166 14 -308 18 -755 17 -539 0 -624 -3 -1262 -46 l-182 -12 -78 46 c-105 60 -155 76 -198 63z m1846 -295 c4 -19 42 -249 83 -510 42 -261 78 -491 82 -511 4 -26 2 -37 -7 -41 -20 -6 -1356 18 -1694 32 -400 16 -647 38 -763 69 -74 20 -179 118 -229 214 -25 46 -28 63 -28 147 0 136 18 180 99 232 239 154 665 274 1216 342 368 45 677 64 1015 62 l219 -1 7 -35z m863 -5 c353 -51 697 -124 874 -186 111 -39 387 -181 567 -292 203 -124 370 -240 370 -255 0 -7 -24 -21 -53 -31 -112 -38 -134 -88 -119 -266 l2 -30 -901 -3 c-714 -2 -904 1 -911 10 -39 49 -353 998 -353 1066 l0 25 176 -7 c97 -4 254 -18 348 -31z" />
        <path d="M2670 3124 c-480 -87 -818 -429 -880 -892 -51 -372 117 -758 426 -978 79 -56 227 -127 323 -153 556 -153 1134 181 1278 738 127 497 -131 1017 -602 1213 -129 53 -217 71 -375 74 -80 1 -156 0 -170 -2z m365 -304 c335 -105 552 -417 532 -765 -25 -433 -413 -760 -837 -706 -172 22 -322 94 -441 211 -208 205 -280 499 -189 772 40 118 87 195 173 285 109 113 235 185 382 219 90 21 291 12 380 -16z" />
        <path d="M2615 2694 c-66 -24 -145 -67 -145 -78 0 -19 207 -219 219 -212 7 5 11 58 11 157 0 148 0 149 -22 148 -13 0 -41 -7 -63 -15z" />
        <path d="M2930 2561 c0 -99 4 -152 11 -157 12 -7 219 193 219 212 0 20 -167 94 -211 94 -18 0 -19 -10 -19 -149z" />
        <path d="M3225 2340 c-89 -89 -107 -112 -95 -120 8 -6 77 -9 155 -7 l140 2 -3 35 c-2 29 -74 200 -84 200 -2 0 -53 -50 -113 -110z" />
        <path d="M2252 2373 c-47 -105 -57 -144 -41 -154 19 -12 270 -11 289 1 12 8 -5 30 -90 115 -57 58 -110 105 -116 105 -6 0 -25 -30 -42 -67z" />
        <path d="M2790 2316 c0 -13 6 -26 13 -29 22 -7 37 4 37 29 0 19 -5 24 -25 24 -20 0 -25 -5 -25 -24z" />
        <path d="M2755 2155 c-35 -34 -33 -78 4 -116 38 -38 74 -38 112 0 56 57 23 141 -56 141 -25 0 -44 -8 -60 -25z" />
        <path d="M2582 2121 c-21 -13 -10 -46 16 -49 27 -4 40 22 22 43 -14 17 -20 18 -38 6z" />
        <path d="M3010 2115 c-18 -21 -5 -47 22 -43 26 3 37 36 16 49 -18 12 -24 11 -38 -6z" />
        <path d="M2205 1948 c11 -49 53 -150 75 -178 l19 -25 106 105 c58 57 105 110 105 117 0 10 -37 13 -156 13 l-156 0 7 -32z" />
        <path d="M3120 1967 c0 -20 206 -220 219 -213 22 14 91 174 91 213 0 10 -32 13 -155 13 -118 0 -155 -3 -155 -13z" />
        <path d="M2794 1896 c-9 -24 4 -48 23 -44 12 2 18 12 18 28 0 29 -32 41 -41 16z" />
        <path d="M2572 1687 c-56 -56 -102 -106 -102 -110 0 -19 210 -104 224 -90 3 4 6 73 6 155 0 113 -3 148 -13 148 -7 0 -58 -46 -115 -103z" />
        <path d="M2930 1641 c0 -83 4 -152 9 -155 20 -12 221 72 221 92 0 13 -205 212 -217 212 -10 0 -13 -35 -13 -149z" />
        <path d="M10765 3123 c-228 -35 -436 -143 -593 -307 -186 -194 -277 -405 -289 -668 -9 -201 25 -360 115 -531 194 -371 607 -594 1015 -548 245 27 437 116 610 280 98 94 158 173 212 281 84 169 110 284 109 480 -2 174 -28 291 -98 435 -108 222 -273 383 -500 491 -140 66 -234 86 -406 90 -80 1 -158 0 -175 -3z m380 -307 c119 -40 208 -97 305 -195 147 -148 214 -311 214 -521 0 -123 -11 -186 -54 -290 -76 -190 -242 -348 -438 -420 -364 -133 -765 29 -932 375 -65 134 -84 226 -77 369 8 170 50 287 153 422 109 144 256 238 439 280 40 9 102 13 185 10 103 -3 139 -8 205 -30z" />
        <path d="M10702 2690 c-67 -24 -132 -61 -132 -75 0 -18 207 -218 219 -211 7 5 11 58 11 157 0 171 5 165 -98 129z" />
        <path d="M11030 2556 c0 -119 3 -156 13 -156 7 0 59 47 116 104 85 85 102 107 93 119 -16 19 -139 74 -184 82 l-38 7 0 -156z" />
        <path d="M10367 2409 c-34 -60 -71 -165 -64 -184 5 -12 29 -15 144 -15 76 0 145 5 153 10 12 8 -7 31 -96 121 l-112 112 -25 -44z" />
        <path d="M11320 2335 c-85 -85 -102 -107 -90 -115 18 -12 270 -13 288 -2 23 15 -51 208 -83 219 -6 2 -57 -44 -115 -102z" />
        <path d="M10886 2323 c-5 -11 -1 -22 9 -30 23 -16 47 -5 43 21 -4 27 -43 34 -52 9z" />
        <path d="M10855 2155 c-47 -46 -24 -125 42 -141 53 -14 113 46 99 99 -16 67 -94 90 -141 42z" />
        <path d="M10682 2121 c-20 -12 -10 -46 14 -49 25 -4 40 24 23 44 -13 16 -19 17 -37 5z" />
        <path d="M11110 2115 c-17 -20 -5 -45 20 -45 11 0 23 7 26 15 6 15 -11 45 -26 45 -4 0 -13 -7 -20 -15z" />
        <path d="M10305 1943 c8 -46 68 -177 85 -188 14 -8 220 191 220 212 0 10 -37 13 -156 13 l-156 0 7 -37z" />
        <path d="M11220 1967 c0 -12 199 -217 212 -217 15 0 80 137 93 198 l7 32 -156 0 c-119 0 -156 -3 -156 -13z" />
        <path d="M10890 1895 c-11 -13 -11 -19 3 -32 21 -21 49 -9 45 19 -4 28 -30 35 -48 13z" />
        <path d="M10672 1687 c-56 -56 -102 -105 -102 -109 0 -22 200 -105 221 -92 5 3 9 72 9 155 0 114 -3 149 -13 149 -7 0 -58 -46 -115 -103z" />
        <path d="M11030 1635 c0 -85 1 -155 3 -155 36 0 227 82 227 97 0 13 -204 213 -217 213 -10 0 -13 -37 -13 -155z" />
      </g>
    </svg>
  `;
  return html;
};

const getFlagImage = (): string => {
  const html = `
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="806.000000pt" height="1280.000000pt" viewBox="0 0 806.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="red" stroke="none">
        <path d="M144 12768 c-214 -144 -179 -464 62 -563 l59 -25 -85 0 c-89 -1 -108 -8 -129 -48 -30 -56 24 -122 99 -122 l35 0 -3 -6005 -2 -6005 140 0 140 0 0 3789 0 3790 93 -44 c471 -220 1042 -329 1627 -311 522 15 1027 99 1918 317 1034 253 1379 322 1847 369 766 77 1411 -13 2008 -280 l107 -48 0 2217 0 2218 -95 42 c-344 151 -670 242 -1035 286 -180 22 -603 30 -805 16 -364 -26 -733 -85 -1210 -191 -202 -45 -343 -79 -855 -204 -749 -182 -1207 -264 -1647 -297 -211 -15 -675 -7 -841 15 -379 50 -740 153 -1052 300 -49 23 -52 26 -25 26 71 0 123 68 94 122 -21 40 -40 47 -129 48 l-85 0 59 25 c117 48 191 146 203 269 11 118 -41 226 -141 294 -48 32 -48 32 -176 32 -128 0 -128 0 -176 -32z" />
      </g>
    </svg>
  `;
  return html;
};

export const renderHeaderBtns = (): void => {
  const headerBtns = document.querySelector('.header__btns') as HTMLElement;
  defaultRender(HEADER_BTNS, headerBtns);
};

export const renderCarSettings = (): void => {
  const html = `
    <div class="car__forms">
      <div class="car__form car__form-create"></div>
      <div class="car__form car__form-update"></div>
    </div>
    <div class="car__settings-btns"></div>
  `;

  const garageContainer = document.querySelector('.garage__container') as HTMLElement;
  const carSettings = document.createElement('div');
  carSettings.classList.add('car__settings');
  carSettings.innerHTML = html;
  garageContainer.append(carSettings);

  const carFormCreate = carSettings.querySelector('.car__form-create') as HTMLElement;
  const carFormUpdate = carSettings.querySelector('.car__form-update') as HTMLElement;
  const carSettingsBtns = carSettings.querySelector('.car__settings-btns') as HTMLElement;
  defaultRender(FORM_CREATE, carFormCreate);
  defaultRender(FORM_UPDATE, carFormUpdate);
  defaultRender(SETTINGS_BTNS, carSettingsBtns);
};

export const renderCarBtns = (i: number, car: IData): void => {
  const carBtns = document.querySelectorAll('.car__btns');
  const carBtn = carBtns[i] as HTMLElement;
  const carId = car.id.toString();
  const carName = car.name;
  const carColor = car.color;
  defaultRender(GARAGE_ELEMENT_BTNS, carBtn, carId, carName, carColor);
};

export const renderEngineConrols = (i: number, car: IData): void => {
  const engineConrols = document.querySelectorAll('.engine_conrols');
  const engineConrol = engineConrols[i] as HTMLElement;
  const carId = car.id.toString();
  defaultRender(CAR_ENGINE_CONTROLS, engineConrol, carId);
};

export const renderCars = (): void => {
  const gargeInner = document.querySelector('.garge__inner') as HTMLElement;
  gargeInner.innerHTML = '';
  store.cars.forEach((car, index) => {
    const html = `
      <div class="car__btns"></div>
      <div class="car__road">
        <div class="engine_conrols"></div>
        <div class="car" data-id="${car.id}">
            ${getCarImage(car.color)}
        </div>
        <div class="flag">
          ${getFlagImage()}
        </div>
      </div>
    `;
    const garageElement = document.createElement('div');
    garageElement.classList.add('garage__element');
    garageElement.innerHTML = html;
    gargeInner.append(garageElement);
    renderCarBtns(index, car);
    renderEngineConrols(index, car);
  });
};

export const renderGarage = (): void => {
  const html = `
    <h1 class="garage__heder">Garage (${store.carsCount})</h1>
    <h2 class="garage__page-heder">Page #${store.carsPage}</h2>
    <div class="garge__inner"></div>
  `;
  const garageContainer = document.querySelector('.garage__container') as HTMLElement;
  if (garageContainer.querySelector('.garage')) garageContainer.querySelector('.garage')?.remove();
  const garage = document.createElement('div');
  garage.classList.add('garage');
  garage.innerHTML = html;
  garageContainer.append(garage);
  renderCars();
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

export const renderWinners = (): void => {
  const html = `
    <h1 class="winners__header">Winners</h1>
    <h2 class="winners__page-heder">Page</h2>
    <table>
      <thead>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Best time(sec)</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td>Tesla</td>
          <td>2</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  `;

  const winners = document.querySelector('.winners') as HTMLElement;
  winners.innerHTML = html;
};

export const render = (): void => {
  const html = `
    <div class="header__btns"></div>
    <div class="garage__container"></div>
    <div class="winners"></div>
    <div class="pages__btn"></div>
  `;
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = html;
  document.body.append(container);
  renderHeaderBtns();
  renderView();
  renderPagesBtn();
};

export const updateGarage = async (): Promise<void> => {
  const { data, count } = await getCars(store.carsPage);
  const prevBtn = document.querySelector('.prev__btn') as HTMLButtonElement;
  const nextBtn = document.querySelector('.next__btn') as HTMLButtonElement;
  store.cars = data;
  store.carsCount = count;
  const maxPage = Math.ceil(store.carsCount / MAX_CARS_ON_PAGE);

  if (store.carsCount > MAX_CARS_ON_PAGE && store.carsPage !== maxPage) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }

  if (store.carsPage > 1) {
    prevBtn.disabled = false;
  } else {
    prevBtn.disabled = true;
  }
};

export const getText = (name: string) => {
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

const defaultRender = (obj: IRender, el: HTMLElement, id = '', name = '', color = '') => {
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

export const fillTextContet = (key: string, htmlElement: HTMLElement, name = '') => {
  const text: IText = getText(name);
  for (const el in text) {
    if (el === key) {
      htmlElement.innerHTML = `${text[key]}`;
    }
  }
};
