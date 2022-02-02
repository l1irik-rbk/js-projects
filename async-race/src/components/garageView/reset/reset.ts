import { MAX_CARS_ON_PAGE } from '../../helpers/constants';
import {
  getCreateBtn,
  getGenerateBtn,
  getNextBtn,
  getPrevBtn,
  getRaceBtn,
  getWinnersBtn,
} from '../../helpers/getElements';
import { getWinnerMessage } from '../../helpers/getElements';
import store from '../../store/store';
import { stopCar } from '../drive/stop/stopCar';

export const resetCars = async (e: Event): Promise<void> => {
  const resetBtn = e.target as HTMLButtonElement;
  const raceBtn = getRaceBtn();
  const message = getWinnerMessage();
  const createBtn = getCreateBtn();
  const winnersBtn = getWinnersBtn();
  const generateBtn = getGenerateBtn();
  const prevBtn = getPrevBtn();
  const nextBtn = getNextBtn();

  message.innerHTML = '';
  store.cars.forEach(async (car) => await stopCar(e, car.id));
  raceBtn.disabled = false;
  resetBtn.disabled = true;
  createBtn.disabled = false;
  winnersBtn.disabled = false;
  generateBtn.disabled = false;

  if (store.carsPage !== 1) {
    prevBtn.disabled = false;
  } else {
    prevBtn.disabled = true;
  }

  const maxPage = Math.ceil(store.carsCount / MAX_CARS_ON_PAGE);

  if (store.carsCount > MAX_CARS_ON_PAGE && store.carsPage !== maxPage) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
};
