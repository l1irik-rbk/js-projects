import { getPrevPage } from './../switchPages/getPrevPage';
import { generateCar } from '../garage/generateCar';
import { removeCar } from '../garage/removeCar';
import { changeCar } from '../garage/updateCar';
import { getNextPage } from '../switchPages/getNextPage';
import { generateRandomCars } from '../garage/generateRandomCars';

export const addListener = (htmlElement: HTMLButtonElement, name: string): void => {
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
    case 'next__btn':
      htmlElement.addEventListener('click', getNextPage);
      break;
    case 'prev__btn':
      htmlElement.addEventListener('click', getPrevPage);
      break;
    case 'generate-btn':
      htmlElement.addEventListener('click', generateRandomCars);
      break;
    // case 'start-engine':
    //   htmlElement.addEventListener('click', generateRandomCars);
    //   break;
    // case 'stop-engine':
    //   htmlElement.addEventListener('click', generateRandomCars);
    //   break;
  }
};
