import { ICarParams, IId } from './../../../helpers/interfaces';
import { driving, startEngine } from '../../../api/api';
import { CAR_WIDTH } from '../../../helpers/constants';
import store from '../../../store/store';
import { getCar, getFlag, getStopBtn } from '../../../helpers/getElements';

export const driveCar = async (e: Event): Promise<void> => {
  const startBtn = e.target as HTMLButtonElement;
  const carId = Number(startBtn.getAttribute('car-id'));
  const stopBtn = getStopBtn(carId);
  const car = getCar(carId);
  const flag = getFlag(carId);
  startBtn.disabled = true;

  const carParams: ICarParams = await startEngine(carId);

  const time = Math.ceil(carParams.distance / carParams.velocity);
  const distance = getDistanceBetweenElements(car, flag) + CAR_WIDTH;

  store.animation[carId] = animate(car, time, distance);
  stopBtn.disabled = false;
  const { success } = await driving(carId);
  if (!success) window.cancelAnimationFrame(store.animation[carId].id);
};

const animate = (car: HTMLElement, duration: number, distance: number): IId => {
  const start = performance.now();
  const carId: IId = {};

  carId.id = requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);
    draw(car, progress, distance);

    if (timeFraction < 1) {
      carId.id = requestAnimationFrame(animate);
    }
  });

  return carId;
};

const timing = (timeFraction: number): number => {
  return timeFraction;
};

const draw = (elem: HTMLElement, progress: number, distance: number): void => {
  elem.style.transform = `translateX(${progress * distance}px)`;
};

const getDistanceBetweenElements = (car: HTMLElement, flag: HTMLElement): number => {
  const carPosition = getPositionAtCenter(car);
  const flagPosition = getPositionAtCenter(flag);

  return Math.hypot(carPosition.x - flagPosition.x, carPosition.y - flagPosition.y);
};

const getPositionAtCenter = (element: HTMLElement): ICarParams => {
  const { top, left, width, height } = element.getBoundingClientRect();

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};
