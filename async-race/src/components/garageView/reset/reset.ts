import { getCreateBtn, getRaceBtn } from '../../helpers/getElements';
import { getWinnerMessage } from '../../helpers/getElements';
import store from '../../store/store';
import { stopCar } from '../drive/stop/stopCar';

export const resetCars = async (e: Event) => {
  const resetBtn = e.target as HTMLButtonElement;
  const raceBtn = getRaceBtn();
  const message = getWinnerMessage();
  const createBtn = getCreateBtn();
  message.innerHTML = '';
  store.cars.forEach(async (car) => await stopCar(e, car.id));
  raceBtn.disabled = false;
  resetBtn.disabled = true;
  createBtn.disabled = false;
};
