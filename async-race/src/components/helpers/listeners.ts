import { getPrevPage } from './../switchPages/getPrevPage';
import { generateCar } from '../garage/generateCar';
import { removeCar } from '../garage/removeCar';
import { changeCar } from '../garage/updateCar';
import { getNextPage } from '../switchPages/getNextPage';
import { generateRandomCars } from '../garage/generateRandomCars';
import { driveCar } from '../garage/drive/stop/driveCar';
import { showGarage, showWinners } from '../switchView';
import { stopCar } from '../garage/drive/stop/stopCar';
import { startRace } from '../garage/race/race';
import { resetCars } from '../garage/reset/reset';

export const addListener = (htmlElement: HTMLButtonElement, name: string): void => {
  switch (name) {
    case 'garage-btn':
      htmlElement.addEventListener('click', showGarage);
      break;
    case 'winners-btn':
      htmlElement.addEventListener('click', showWinners);
      break;
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
    case 'start-engine':
      htmlElement.addEventListener('click', driveCar);
      break;
    case 'stop-engine':
      htmlElement.addEventListener('click', stopCar);
      break;
    case 'race-btn':
      htmlElement.addEventListener('click', startRace);
      break;
    case 'reset-btn':
      htmlElement.addEventListener('click', resetCars);
      break;
  }
};
