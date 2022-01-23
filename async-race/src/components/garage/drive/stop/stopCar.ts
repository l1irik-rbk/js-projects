import { driveCar } from './driveCar';
import { stopEngine } from '../../../api/api';
import { getCar, getStartBtn, getStopBtn, getWinnersBtn } from '../../../helpers/getElements';
import store from '../../../store/store';

export const stopCar = async (e: Event, id = 0): Promise<void> => {
  let stopBtn;
  let carId;

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
};
