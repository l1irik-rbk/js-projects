import { stopEngine } from '../../../api/api';
import { MAX_CARS_ON_PAGE } from '../../../helpers/constants';
import { getCar, getNextBtn, getPrevBtn, getStartBtn, getStopBtn } from '../../../helpers/getElements';
import store from '../../../store/store';

export const stopCar = async (e: Event, id = 0): Promise<void> => {
  let stopBtn;
  let carId;
  const prevBtn = getPrevBtn();
  const nextBtn = getNextBtn();

  if (id === 0) {
    stopBtn = e.target as HTMLButtonElement;
    carId = Number(stopBtn.getAttribute('car-id'));
  } else {
    carId = id;
    stopBtn = getStopBtn(carId);
  }

  const startBtn = getStartBtn(carId);
  const car = getCar(carId);

  await stopEngine(carId);
  car.style.transform = `translateX(0px)`;
  window.cancelAnimationFrame(store.animation[carId].id);
  stopBtn.disabled = true;
  startBtn.disabled = false;

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
