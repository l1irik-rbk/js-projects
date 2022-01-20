import { generateCar } from '../garage/generateCar';
import { removeCar } from '../garage/removeCar';
import { changeCar } from '../garage/updateCar';

export const addListener = (htmlElement: HTMLButtonElement, name: string) => {
  switch (name) {
    case 'create-btn':
      htmlElement.addEventListener('click', generateCar);
      break;
    case 'remove-btn':
      htmlElement.addEventListener('click', removeCar);
      break;
    case 'select-btn':
      htmlElement.addEventListener('click', changeCar);
      break;
  }
};
