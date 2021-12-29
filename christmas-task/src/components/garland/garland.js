import './garland.css'
import { lights, garlandsArr } from "../helpers/constants";

export function changeGarland(e, garlandColor) {
  lights.innerHTML = ''
  let color

  if (garlandColor) {
    color = garlandColor
  } else {
    color = e.target.dataset.color
  }

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('garlandColor', color);
  });

  for (let i = 0; i < garlandsArr.length; i++) {
    const width = garlandsArr[i].width
    const height = garlandsArr[i].height
    let translate = width / 2
    let numbers = garlandsArr[i].numbers
    let rotate = garlandsArr[i].rotate
    let angle = garlandsArr[i].angle

    const ul = document.createElement('ul')
    ul.classList.add('lightrope')
    ul.style.width = `${width}px`
    ul.style.height = `${height}px`
    lights.appendChild(ul)

    for (let j = 0; j < numbers; j++) {
      const li = document.createElement('li')
      li.classList.add(`${color}`)
      ul.append(li)
      li.style.transform = `rotate(${rotate}deg) translate(${translate}px) rotate(-${rotate}deg)`
      rotate += angle
    }
  }
}

function getLocalStorage(e) {
  if (localStorage.getItem('garlandColor')) {
    const garlandColor = localStorage.getItem('garlandColor');
    if (garlandColor) changeGarland(e, garlandColor)
  }
}
window.addEventListener('load', getLocalStorage);