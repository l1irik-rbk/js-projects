import Toy from './toy';
import { score, MAX_CARDS } from './helpers/constants';
import { showPopup } from './popup/popup';
import { IData } from './helpers/interfaces';

export default class Toys {
  draw(data: Array<IData>) {
    const inner = document.querySelector('.toys__inner') as HTMLElement;
    inner.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
      const newToy = new Toy({ ...data[i] });
      const htmlCard = newToy.createCard();
      htmlCard.addEventListener('click', this.toFavorites.bind(newToy));
      inner.append(htmlCard);
    }
  }

  toFavorites(e: Event) {
    const card = e.currentTarget as HTMLElement;
    const favorites = card.querySelector('.card__favorites') as HTMLElement;
    const cardName = (card.querySelector('.card__title') as HTMLElement).textContent || '';

    if (!favorites.classList.contains('favorites') && counter < MAX_CARDS) {
      if (toysArr.length < MAX_CARDS - 1) {
        favorites.classList.add('favorites');
        toysArr.push(cardName);
      }
      counter++;
      score.textContent = `${counter}`;
      if (counter === MAX_CARDS) {
        showPopup('Извините, все слоты заполнены');
        counter--;
        score.textContent = `${counter}`;
      }
    } else if (favorites.classList.contains('favorites')) {
      favorites.classList.remove('favorites');
      const toyIndex = toysArr.indexOf(cardName);
      if (toyIndex !== -1) toysArr.splice(toyIndex, 1);
      counter--;
      score.textContent = `${counter}`;
    }
  }
}

function setLocalStorage() {
  localStorage.setItem('toysArr', JSON.stringify(toysArr));
  localStorage.setItem('counter', JSON.stringify(counter));
}

function getLocalStorage() {
  if (localStorage.getItem('toysArr')) {
    toysArr = JSON.parse(localStorage.getItem('toysArr') || '');
  }

  if (localStorage.getItem('counter')) {
    counter = JSON.parse(localStorage.getItem('counter') || '');
  }

  const inner = document.querySelector('.toys__inner') as HTMLElement;
  const cards = inner.querySelectorAll('.card');
  cards.forEach((card) => {
    if (toysArr.includes((card.querySelector('h5') as HTMLElement).textContent || '')) {
      (card.querySelector('.card__favorites') as HTMLElement).classList.add('favorites');
    }
  });
  score.textContent = counter.toString();
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
let counter = 0;
export let toysArr: Array<string> = [];
