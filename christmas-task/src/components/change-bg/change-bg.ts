import { mainBg } from '../helpers/constants';

export function changeBg(e: Event): void {
  const bgNumber = (e.target as HTMLElement).dataset.bg as string;
  mainBg.style.backgroundImage = 'none';
  mainBg.style.backgroundImage = `url('./assets/bg/${bgNumber}.jpg')`;

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('bgNumber', bgNumber);
  });
}

function getLocalStorage(): void {
  if (localStorage.getItem('bgNumber')) {
    const bgNumber = localStorage.getItem('bgNumber');
    mainBg.style.backgroundImage = `url('./assets/bg/${bgNumber}.jpg')`;
  }
}
window.addEventListener('load', getLocalStorage);
