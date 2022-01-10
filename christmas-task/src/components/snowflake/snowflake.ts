import { snowBlock } from '../helpers/constants';

export function snowFlake(): void {
  if (!snowBlock.classList.contains('snow--active')) {
    snowBlock.classList.add('snow--active');
    snowFlag = true;
  } else {
    snowBlock.classList.remove('snow--active');
    snowFlag = false;
  }

  const interevalId = setInterval(() => {
    if (snowBlock.classList.contains('snow--active')) {
      showSnow();
    } else {
      clearInterval(interevalId);
    }
  }, 50);
}

function showSnow(): void {
  const snowFlakeItem = document.createElement('i');
  snowFlakeItem.classList.add('snowflakes');
  snowFlakeItem.style.left = `${Math.random() * 800}px`;
  snowFlakeItem.style.animationDuration = `${Math.random() * 5 + 5}s`;
  snowFlakeItem.style.opacity = `${Math.random()}`;
  snowFlakeItem.style.fontSize = `${Math.random() * 10 + 10}px`;
  snowFlakeItem.style.transform = `rotate(${Math.random() * 360}deg)`;
  snowBlock.appendChild(snowFlakeItem);

  setTimeout(() => {
    snowFlakeItem.remove();
  }, 10000);
}

let snowFlag = false;

function setLocalStorage(): void {
  localStorage.setItem('snowFlag', JSON.stringify(snowFlag));
}

function getLocalStorage(): void {
  if (localStorage.getItem('snowFlag')) {
    const snowFlag = localStorage.getItem('snowFlag');
    if (snowFlag === 'true') snowFlake();
  }
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
