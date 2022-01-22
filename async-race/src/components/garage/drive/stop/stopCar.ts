import { stopEngine } from '../../../api/api';
import { getCar, getStartBtn } from '../../../helpers/getElements';
import store from '../../../store/store';

export const stopCar = async (e: Event): Promise<void> => {
  const stopBtn = e.target as HTMLButtonElement;
  const carId = Number(stopBtn.getAttribute('car-id'));
  const startBtn = getStartBtn(carId);
  const car = getCar(carId);

  stopBtn.disabled = true;
  await stopEngine(carId);
  car.style.transform = `translateX(0px)`;
  window.cancelAnimationFrame(store.animation[carId].id);
  startBtn.disabled = false;
};
