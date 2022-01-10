import './garland.css';
import { lights, garlandsArr } from '../helpers/constants';

export function changeGarland(e: Event): void {
  lights.innerHTML = '';
  const color = (e.target as HTMLElement).dataset.color;

  for (let i = 0; i < garlandsArr.length; i++) {
    const width = garlandsArr[i].width;
    const height = garlandsArr[i].height;
    const translate = width / 2;
    const numbers = garlandsArr[i].numbers;
    let rotate = garlandsArr[i].rotate;
    const angle = garlandsArr[i].angle;

    const ul = document.createElement('ul');
    ul.classList.add('lightrope');
    ul.style.width = `${width}px`;
    ul.style.height = `${height}px`;
    lights.appendChild(ul);

    for (let j = 0; j < numbers; j++) {
      const li = document.createElement('li');
      li.classList.add(`${color}`);
      ul.append(li);
      li.style.transform = `rotate(${rotate}deg) translate(${translate}px) rotate(-${rotate}deg)`;
      rotate += angle;
    }
  }
}
