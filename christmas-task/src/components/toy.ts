import { CARD_ELEMENT } from './helpers/constants';
import { IData } from './helpers/interfaces';

export default class Toy {
  color?: string;
  count?: string;
  name?: string;
  shape?: string;
  size?: string;
  year?: string;
  num?: string;
  favorite?: boolean;
  isSelected: boolean;
  card: HTMLElement;

  constructor(obj: IData) {
    this.color = obj.color;
    this.count = obj.count;
    this.name = obj.name;
    this.shape = obj.shape;
    this.size = obj.size;
    this.year = obj.year;
    this.num = obj.num;
    this.favorite = obj.favorite;

    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.isSelected = false;
  }

  get htmlText() {
    return {
      title: `${this.name}`,
      cardImage: `url('./assets/toys/${this.num}.webp')`,
      cardCount: `Количество: ${this.count}`,
      cardYear: `Год покупки: ${this.year} год`,
      cardShape: `Форма игрушки: ${this.shape}`,
      cardColor: `Цвет игрушки: ${this.color}`,
      cardSize: `Размер игрушки: ${this.size}`,
      cardBeloved: `Любимая: ${this.favorite ? 'Да' : 'Нет'}`,
    };
  }

  createCard(): HTMLElement {
    for (const [key, element] of Object.entries(CARD_ELEMENT)) {
      const htmlElement = document.createElement(element.htmlElement) as HTMLElement;
      htmlElement.classList.add(...element.classes);
      this.fillTextContent(key, htmlElement);
      this.card.append(htmlElement);
    }
    return this.card;
  }

  fillTextContent(key: string, htmlElement: HTMLElement): void {
    const text = this.htmlText;
    for (const [keyText, element] of Object.entries(text)) {
      if (keyText === key) {
        if (key !== 'cardImage') {
          htmlElement.innerHTML = `${element}`;
        } else {
          htmlElement.style.backgroundImage = `${text[key]}`;
        }
      }
    }
  }
}
