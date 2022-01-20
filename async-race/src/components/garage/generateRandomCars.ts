import { createCar } from '../api/api';
import { IText } from './../helpers/interfaces';
import { brandsCars, modelsCars } from '../helpers/constants';
import { renderGarage, updateGarage } from '../render';

export const generateRandomCars = async (e: Event): Promise<void> => {
  const btn = e.target as HTMLButtonElement;
  btn.disabled = true;
  const cars = getRandomCars();
  cars.forEach(async (car) => await createCar(car));
  await updateGarage();
  renderGarage();
  btn.disabled = false;
};

const getRandomCars = (): IText[] => {
  const generatedCars: IText[] = [];

  for (let i = 0; i < 100; i++) {
    const car: IText = {
      name: getRandomName(),
      color: getRandomColor(),
    };
    generatedCars.push(car);
  }
  return generatedCars;
};

const getRandomName = (): string => {
  const randomBrand = brandsCars[Math.floor(Math.random() * brandsCars.length)];
  const randomModel = modelsCars[Math.floor(Math.random() * modelsCars.length)];

  return `${randomBrand} ${randomModel}`;
};

const getRandomColor = (): string => {
  const max = 255;
  const R = Math.floor(Math.random() * max);
  const G = Math.floor(Math.random() * max);
  const B = Math.floor(Math.random() * max);

  return `#${R.toString(16)}${G.toString(16)}${B.toString(16)}`;
};
