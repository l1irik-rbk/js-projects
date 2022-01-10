import Toys from './toys';
import data from './data';
import { sliderCount, sliderYear, minCount, maxCount, minYear, maxYear } from './slider';
import { API } from 'nouislider';
import {
  search,
  forms,
  colors,
  sizes,
  favorites,
  MIN_COUNT,
  MACX_COUNT,
  MIN_YEAR,
  MAX_YEAR,
} from './helpers/constants';
import { showPopup } from './popup/popup';
import { IData, IFilterObject, IObjet, IMainObj, IKeys } from './helpers/interfaces';

let newData: Array<IData> = data;

export function sorted(e: Event) {
  if ((e.target as HTMLInputElement).value === 'По названию от А до Я') {
    newData.sort((a, b) => (a.name < b.name ? -1 : 1));
  } else if ((e.target as HTMLInputElement).value === 'По названию от Я до А') {
    newData.sort((a, b) => (a.name > b.name ? -1 : 1));
  } else if ((e.target as HTMLInputElement).value === 'По возрастанию') {
    newData.sort((a, b) => (+a.count < +b.count ? -1 : 1));
  } else if ((e.target as HTMLInputElement).value === 'По убыванию') {
    newData.sort((a, b) => (+a.count > +b.count ? -1 : 1));
  }
  filterData(newData, mainObj);
}

export function filtred(e: Event): void {
  if (
    ((e.target as HTMLElement).classList.contains('bell') ||
      (e.target as HTMLElement).classList.contains('ball') ||
      (e.target as HTMLElement).classList.contains('cone') ||
      (e.target as HTMLElement).classList.contains('snowflake') ||
      (e.target as HTMLElement).classList.contains('figurine')) &&
    !(e.target as HTMLElement).classList.contains('toy--active')
  ) {
    (e.target as HTMLElement).classList.add('toy--active');
    const dataAtr = (e.target as HTMLElement).dataset.icon as string;
    mainObj.shape[dataAtr] = true;
    filterData(newData, mainObj);
  } else if ((e.target as HTMLElement).classList.contains('toy--active')) {
    (e.target as HTMLElement).classList.remove('toy--active');
    const dataAtr = (e.target as HTMLElement).dataset.icon as string;
    mainObj.shape[dataAtr] = false;
    filterData(newData, mainObj);
  }

  if (
    ((e.target as HTMLElement).classList.contains('white') ||
      (e.target as HTMLElement).classList.contains('yellow') ||
      (e.target as HTMLElement).classList.contains('red') ||
      (e.target as HTMLElement).classList.contains('blue') ||
      (e.target as HTMLElement).classList.contains('green')) &&
    !(e.target as HTMLElement).classList.contains('filters__color--active')
  ) {
    (e.target as HTMLElement).classList.add('filters__color--active');
    const dataAtr = (e.target as HTMLElement).dataset.color as string;
    mainObj.color[dataAtr] = true;
    filterData(newData, mainObj);
  } else if ((e.target as HTMLElement).classList.contains('filters__color--active')) {
    (e.target as HTMLElement).classList.remove('filters__color--active');
    const dataAtr = (e.target as HTMLElement).dataset.color as string;
    mainObj.color[dataAtr] = false;
    filterData(newData, mainObj);
  }

  if (
    (e.currentTarget as HTMLElement).classList.contains('filters__size-checkboxes') &&
    (e.target as HTMLInputElement).checked
  ) {
    const targetId = (e.target as HTMLElement).id;
    mainObj.size[`${targetId}`] = true;
    delete mainObj.size[''];
    filterData(newData, mainObj);
  } else if ((e.currentTarget as HTMLElement).classList.contains('filters__size-checkboxes')) {
    const targetId = (e.target as HTMLElement).id;
    mainObj.size[`${targetId}`] = false;
    delete mainObj.size[''];
    filterData(newData, mainObj);
  }

  if (
    (e.currentTarget as HTMLElement).classList.contains('filters__size-favorite') &&
    (e.target as HTMLInputElement).checked
  ) {
    const targetId = (e.target as HTMLElement).id;
    mainObj.favorite[`${targetId}`] = true;
    delete mainObj.favorite[''];
    filterData(newData, mainObj);
  } else if ((e.currentTarget as HTMLElement).classList.contains('filters__size-favorite')) {
    const targetId = (e.target as HTMLElement).id;
    mainObj.favorite[`${targetId}`] = false;
    delete mainObj.favorite[''];
    filterData(newData, mainObj);
  }
}

function filterData(data: Array<IData>, mainObj: IMainObj): void {
  const shape: IFilterObject = mainObj.shape;
  const color: IFilterObject = mainObj.color;
  const size: IFilterObject = mainObj.size;
  const favorite: IFilterObject = mainObj.favorite;

  const keys: IKeys = {
    ['bell']: 'колокольчик',
    ['ball']: 'шар',
    ['cone']: 'шишка',
    ['snowflake']: 'снежинка',
    ['figurine']: 'фигурка',
    ['white']: 'белый',
    ['yellow']: 'желтый',
    ['red']: 'красный',
    ['blue']: 'синий',
    ['green']: 'зелёный',
    ['big']: 'большой',
    ['middle']: 'средний',
    ['little']: 'малый',
    ['favorite']: 'true',
  };

  const object: IObjet = {
    count: [],
    year: [],
  };

  Object.entries(shape).forEach(([key, value]) => {
    if (value) {
      if (!object.shape) object.shape = [];
      object.shape.push(keys[`${key}`]);
    }
  });

  Object.entries(color).forEach(([key, value]) => {
    if (value) {
      if (!object.color) object.color = [];
      object.color.push(keys[`${key}`]);
    }
  });

  Object.entries(size).forEach(([key, value]) => {
    if (value) {
      if (!object.size) object.size = [];
      object.size.push(keys[`${key}`]);
    }
  });

  Object.entries(favorite).forEach(([key, value]) => {
    if (value) {
      if (!object.favorite) object.favorite = [];
      object.favorite.push(Boolean(keys[`${key}`]));
    }
  });

  for (let i = mainObj.count.start; i <= mainObj.count.end; i++) {
    const count: string = i.toString();
    object.count.push(count);
  }

  for (let i = mainObj.year.start; i <= mainObj.year.end; i += 10) {
    const year: string = i.toString();
    object.year.push(year);
  }

  const filterdArr = filterArr(data, object);
  const toys = new Toys();
  toys.draw(filterdArr);
}

function filterArr(array: Array<IData>, filters: IObjet) {
  const keys = Object.keys(filters);
  return array.filter((el: IData) => {
    return keys.reduce((flag, key) => flag && filters[key].includes(el[key]), true);
  });
}

export function resetBtn(): void {
  for (const key in mainObj.shape) {
    mainObj.shape[`${key}`] = false;
  }

  for (const key in mainObj.color) {
    mainObj.color[`${key}`] = false;
  }

  for (const key in mainObj.size) {
    mainObj.size[`${key}`] = false;
  }

  for (const key in mainObj.favorite) {
    mainObj.favorite[`${key}`] = false;
  }

  mainObj.count.start = MIN_COUNT;
  mainObj.count.end = MACX_COUNT;
  mainObj.year.start = MIN_YEAR;
  mainObj.year.end = MAX_YEAR;

  forms.forEach((form) => {
    if (form.classList.contains('toy--active')) form.classList.remove('toy--active');
  });

  colors.forEach((color) => {
    if (color.classList.contains('filters__color--active')) color.classList.remove('filters__color--active');
  });

  sizes.forEach((size) => {
    if (size.checked) size.checked = false;
  });

  if (favorites.checked) favorites.checked = false;
  (<API>sliderCount.noUiSlider).reset();
  (<API>sliderYear.noUiSlider).reset();
  minCount.textContent = MIN_COUNT.toString();
  maxCount.textContent = MACX_COUNT.toString();
  minYear.textContent = MIN_YEAR.toString();
  maxYear.textContent = MAX_YEAR.toString();

  filterData(newData, mainObj);
}

export function searchField(): void {
  const inner = document.querySelector('.toys__inner') as HTMLElement;
  const cards = inner.querySelectorAll('.card');
  const deleteText = document.querySelector('.filters__top-icon') as HTMLElement;
  const inputValue = search.value.toLowerCase();
  const arr: Array<string> = [];

  deleteText.addEventListener('click', () => {
    search.value = '';
    cards.forEach((card) => ((card as HTMLElement).style.display = ''));
  });

  cards.forEach((card) => {
    const cardTitle = (card.querySelector('h5') as HTMLElement).textContent || '';
    if (cardTitle.toLowerCase().indexOf(inputValue) > -1) {
      (card as HTMLElement).style.display = '';
    } else {
      (card as HTMLElement).style.display = 'none';
      arr.push('');
    }

    if (cards.length === arr.length) {
      showPopup('Извините, совпадений не обнаружено');
    }
  });
}

(<API>sliderCount.noUiSlider).on('slide', (values) => {
  const start = +values[0].toString().split('.')[0];
  const end = +values[1].toString().split('.')[0];
  mainObj.count.start = start;
  mainObj.count.end = end;
  minCount.textContent = start.toString();
  maxCount.textContent = end.toString();
  filterData(newData, mainObj);
});

(<API>sliderYear.noUiSlider).on('slide', (values) => {
  const start = +values[0].toString().split('.')[0];
  const end = +values[1].toString().split('.')[0];
  mainObj.year.start = start;
  mainObj.year.end = end;
  minYear.textContent = start.toString();
  maxYear.textContent = end.toString();
  filterData(newData, mainObj);
});

export let mainObj: IMainObj = {
  shape: {
    ['bell']: false,
    ['ball']: false,
    ['cone']: false,
    ['snowflake']: false,
    ['figurine']: false,
  },
  color: {
    ['white']: false,
    ['yellow']: false,
    ['red']: false,
    ['blue']: false,
    ['green']: false,
  },
  size: {
    ['big']: false,
    ['middle']: false,
    ['little']: false,
  },
  favorite: {
    ['favorite']: false,
  },
  count: {
    start: MIN_COUNT,
    end: MACX_COUNT,
  },
  year: {
    start: MIN_YEAR,
    end: MAX_YEAR,
  },
};

const clearLocStor = document.querySelector('.filters__btn-settings') as HTMLElement;
clearLocStor.addEventListener('click', () => {
  localStorage.removeItem('mainObj');
  localStorage.removeItem('toysArr');
  localStorage.removeItem('newData');
  localStorage.removeItem('counter');
  filterData(newData, mainObj);
});

function setLocalStorage() {
  localStorage.setItem('mainObj', JSON.stringify(mainObj));
  localStorage.setItem('newData', JSON.stringify(newData));
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('mainObj')) {
    mainObj = JSON.parse(localStorage.getItem('mainObj') || '');

    forms.forEach((form) => {
      for (const key in mainObj.shape) {
        if (mainObj.shape[`${key}`] && form.classList.contains(`${key}`)) {
          form.classList.add('toy--active');
        }
      }
    });

    colors.forEach((color) => {
      for (const key in mainObj.color) {
        if (mainObj.color[`${key}`] && color.classList.contains(`${key}`)) {
          color.classList.add('filters__color--active');
        }
      }
    });

    sizes.forEach((size) => {
      for (const key in mainObj.size) {
        if (mainObj.size[`${key}`] && size.classList.contains(`${key}`)) {
          size.classList.add('filters__color--active');
        }
      }
    });

    if (mainObj.favorite[`favorite`]) favorites.checked = true;
    minCount.textContent = mainObj.count.start.toString();
    maxCount.textContent = mainObj.count.end.toString();
    minYear.textContent = mainObj.year.start.toString();
    maxYear.textContent = mainObj.year.end.toString();

    (<API>sliderCount.noUiSlider).updateOptions({ start: [mainObj.count.start, mainObj.count.end] }, true);
    (<API>sliderYear.noUiSlider).updateOptions({ start: [mainObj.year.start, mainObj.year.end] }, true);
  }

  if (localStorage.getItem('newData')) {
    newData = JSON.parse(localStorage.getItem('newData') || '');
  }

  filterData(newData, mainObj);
}
window.addEventListener('load', getLocalStorage);
