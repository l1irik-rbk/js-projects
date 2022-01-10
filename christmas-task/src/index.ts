import './css/reset.css';
import './style.css';
import { switchPage } from './components/pages/pages';

export const mainBtn = document.querySelector('.main__page-btn') as HTMLElement;
export const toysBtn = document.querySelector('.toys__page-btn') as HTMLElement;
export const treeBtn = document.querySelector('.tree__page-btn') as HTMLElement;
export const mainPageBtn = document.querySelector('.main-page__btn') as HTMLElement;

mainBtn.addEventListener('click', switchPage);
toysBtn.addEventListener('click', switchPage);
treeBtn.addEventListener('click', switchPage);
mainPageBtn.addEventListener('click', switchPage);
