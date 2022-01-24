import { getPrevPage } from './../switchPages/getPrevPage';
import { generateCar } from '../garageView/generate/generateCar';
import { removeCar } from '../garageView/remove/update/removeCar';
import { changeCar } from '../garageView/remove/update/updateCar';
import { getNextPage } from '../switchPages/getNextPage';
import { generateRandomCars } from '../garageView/generate/generateRandomCars';
import { driveCar } from '../garageView/drive/stop/driveCar';
import { showGarage, showWinners } from '../switchViews/switchView';
import { stopCar } from '../garageView/drive/stop/stopCar';
import { startRace } from '../garageView/race/race';
import { resetCars } from '../garageView/reset/reset';

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
