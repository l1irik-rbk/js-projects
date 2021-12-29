import { snowBlock } from '../helpers/constants'

export function snowFlake() {
  if (!snowBlock.classList.contains('snow--active')) {
    snowBlock.classList.add('snow--active')
    snowFlag = true
  } else {
    snowBlock.classList.remove('snow--active')
    snowFlag = false
  }

  const interevalId = setInterval(() => {
    if (snowBlock.classList.contains('snow--active')) {
      showSnow()
    } else {
      clearInterval(interevalId)
    }
  }, 50)
}

function showSnow() {
  const snowFlakeItem = document.createElement('i');
  snowFlakeItem.classList.add('snowflakes')
  snowFlakeItem.style.left = `${Math.random() * 800}px`
  snowFlakeItem.style.animationDuration = `${Math.random() * 5 + 5}s`
  snowFlakeItem.style.opacity = Math.random()
  snowFlakeItem.style.fontSize = `${Math.random() * 10 + 10}px`
  snowFlakeItem.style.transform = `rotate(${Math.random() * 360}deg)`
  snowBlock.appendChild(snowFlakeItem)

  setTimeout(() => {
    snowFlakeItem.remove()
  }, 10000)
}

let snowFlag = false

function setLocalStorage() {
  localStorage.setItem('snowFlag', snowFlag);
}

function getLocalStorage() {
  if (localStorage.getItem('snowFlag')) {
    let snowFlag = localStorage.getItem('snowFlag');
    if (snowFlag === 'true') snowFlake()
  }
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);