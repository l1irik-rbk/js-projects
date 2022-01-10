import Toy from '../toy';
import { TOY_CARD_ELEMENT } from '../helpers/constants';
import { IData } from '../helpers/interfaces';

export default class TreeToy extends Toy {
  constructor(data: IData) {
    super(data);
    this.card.classList.add('toy__card');
  }

  createNewCard(number: number) {
    const count = Number(this.count);

    for (const [key, element] of Object.entries(TOY_CARD_ELEMENT)) {
      let imgHtmlElement: HTMLImageElement;
      let spanHtmlElement: HTMLElement;

      if (count > 1 && element.htmlElement === 'img') {
        for (let i = 0; i < count; i++) {
          imgHtmlElement = document.createElement(element.htmlElement);
          imgHtmlElement.classList.add(...element.classes);
          imgHtmlElement.src = `./assets/toys/${this.num}.webp`;
          imgHtmlElement.draggable = true;
          imgHtmlElement.id = `el-${number}${i}`;
          imgHtmlElement.setAttribute('data-imgNum', number.toString());
          imgHtmlElement.addEventListener('dragstart', dragStart);
          this.card.append(imgHtmlElement);
        }
      } else {
        spanHtmlElement = document.createElement(element.htmlElement);
        spanHtmlElement.classList.add(...element.classes);
        this.fillTextContent(key, spanHtmlElement);
        this.card.append(spanHtmlElement);
      }
    }
    return this.card;
  }
}

export function draw(data: Array<IData>): void {
  const blockInner = document.querySelector('.toys__block-inner') as HTMLElement;
  blockInner.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const newToy = new TreeToy({ ...data[i] });
    const htmlCard = newToy.createNewCard(i);
    htmlCard.setAttribute('data-num', i.toString());
    blockInner.append(htmlCard);
  }
}

function dragStart(e: DragEvent): void {
  const map = document.querySelector('area') as HTMLAreaElement;
  const cards = document.querySelectorAll('.toy__card') as NodeListOf<HTMLImageElement>;

  e.dataTransfer?.setData('id', (e.target as HTMLImageElement).id);
  const shiftX = e.clientX - (e.target as HTMLImageElement).getBoundingClientRect().left;
  const shiftY = e.clientY - (e.target as HTMLImageElement).getBoundingClientRect().top;

  function dragOver(e: DragEvent): void {
    e.preventDefault();

    if (e.type !== 'drop') {
      return;
    }

    const itemID = e.dataTransfer?.getData('id');
    const item = document.getElementById(`${itemID}`) as HTMLImageElement;
    const itemDataAtr = item.dataset.imgnum;
    item.style.left = e.pageX - shiftX + 'px';
    item.style.top = e.pageY - shiftY + 'px';
    map.appendChild(item);
    cardCounter();

    function leaveTree(event: DragEvent): void {
      item.style.visibility = 'hidden';
      const targetDrop = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement;
      item.style.visibility = 'visible';

      cards.forEach((card) => {
        const cardDataAtr = card.dataset.num;
        if (targetDrop.tagName !== map.tagName && itemDataAtr === cardDataAtr) {
          item.parentNode?.removeChild(item);
          item.style.left = `${12}px`;
          item.style.top = `${7}px`;
          card.append(item);
          cardCounter();
        }
      });
    }
    item.addEventListener('dragend', leaveTree);
  }

  function cardCounter(): void {
    cards.forEach((card) => {
      const toysNumbers = card.querySelectorAll('img');
      const toysCounter = card.querySelector('span') as HTMLSpanElement;
      const cardDataAtr = card.dataset.num;

      if ((e.target as HTMLImageElement).dataset.imgnum === cardDataAtr) {
        for (let i = 0; i <= toysNumbers.length; i++) {
          toysCounter.textContent = i.toString();
        }
      }
    });
  }

  map.addEventListener('drop', dragOver);
  map.addEventListener('dragover', dragOver);
}

export function resetTree(): void {
  localStorage.removeItem('garlandColor');
  localStorage.removeItem('audioFlag');
  localStorage.removeItem('snowFlag');
  localStorage.removeItem('treeNumber');
  localStorage.removeItem('bgNumber');
}
