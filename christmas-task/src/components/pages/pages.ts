import { menuList, mainPage, toysPage, treePage, main } from '../helpers/constants';
import data from '../data';
import { draw } from '../tree-toys/tree-toys';
import Toys from '../toys';
import { newData } from '../toys';
import { mainBtn, toysBtn, treeBtn, mainPageBtn } from '../../index';
import { IData } from '../helpers/interfaces';

function changeData(): Array<IData> {
  if (!newData.length) return data.slice(0, 20);

  return newData;
}

export function switchPage(e: Event): void {
  menuList.forEach((item) => item.classList.remove('page--active'));

  if (!(e.target as HTMLElement).classList.contains('logo')) {
    (e.target as HTMLElement).classList.toggle('page--active');
  }

  if ((e.target as HTMLElement) === toysBtn || (e.target as HTMLElement) === mainPageBtn) {
    toysPage.classList.add('active');
    mainPage.classList.remove('active');
    treePage.classList.remove('active');
    main.style.backgroundImage = 'none';
  } else if (e.target === mainBtn) {
    const toys = new Toys();
    toys.draw(data);
    mainPage.classList.add('active');
    toysPage.classList.remove('active');
    treePage.classList.remove('active');
    main.style.backgroundImage = 'url(./assets/bg.webp)';
  } else if (e.target === treeBtn) {
    const data = changeData();
    draw(data);

    treePage.classList.add('active');
    toysPage.classList.remove('active');
    mainPage.classList.remove('active');
    main.style.backgroundImage = 'none';
  }
}
