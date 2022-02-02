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
import { checkPage } from '../../mainRender/render';
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

  const maxPage = Math.ceil(store.carsCount / MAX_CARS_ON_PAGE);
  checkPage(prevBtn, nextBtn, maxPage);
};
