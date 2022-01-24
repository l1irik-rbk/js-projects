import { ICarParams, IId } from '../../../helpers/interfaces';
import { driving, startEngine } from '../../../api/api';
import { CAR_WIDTH } from '../../../helpers/constants';
import store from '../../../store/store';
import { getCar, getFlag, getStartBtn, getStopBtn } from '../../../helpers/getElements';

export const driveCar = async (e: Event, id = 0) => {
  let carId: number;
  let startBtn: HTMLButtonElement;

  if (id === 0) {
    startBtn = e.target as HTMLButtonElement;
    carId = Number(startBtn.getAttribute('car-id'));
  } else {
    carId = id;
    startBtn = getStartBtn(carId);
  }

  const stopBtn = getStopBtn(carId);
  const car = getCar(carId);
  const flag = getFlag(carId);
  startBtn.disabled = true;
  const carParams: ICarParams = await startEngine(carId);

  const time = Math.ceil(carParams.distance / carParams.velocity);
  const distance = getDistanceBetweenElements(car, flag) + CAR_WIDTH;

  store.animation[carId] = animate(car, time, distance);
  stopBtn.disabled = false;

  const { success }: { success: boolean } = await driving(carId);
  if (!success) window.cancelAnimationFrame(store.animation[carId].id);
  return carId;
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
    } else {
      if (store.isRace && progress * distance === distance) {
        store.isRace = false;
        store.raceWinner = carId;
        store.raceWinnerTime = duration;
      }
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
