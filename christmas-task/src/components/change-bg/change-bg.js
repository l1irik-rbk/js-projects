import { mainBg } from '../helpers/constants'

export function changeBg(e) {
  const bgNumber = +e.target.dataset.bg
  mainBg.style.backgroundImage = 'none'
  mainBg.style.backgroundImage = `url('./assets/bg/${bgNumber}.jpg')`
 
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('bgNumber', bgNumber);
  });
}

function getLocalStorage() {
  if (localStorage.getItem('bgNumber')) {
    const bgNumber = localStorage.getItem('bgNumber');
    mainBg.style.backgroundImage = `url('./assets/bg/${bgNumber}.jpg')`
  }
}
window.addEventListener('load', getLocalStorage);