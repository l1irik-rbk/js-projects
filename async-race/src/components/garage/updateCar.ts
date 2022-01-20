import { IText } from './../helpers/interfaces';
import { updateCar } from '../api/api';
import { renderGarage, updateGarage } from '../render';
import { PLACEHOLDER_MESSAGE } from '../helpers/constants';

export const changeCar = (e: Event): void => {
  const inputText = document.querySelector('.car__form-update .input-text') as HTMLInputElement;
  const inputColor = document.querySelector('.car__form-update .input-color') as HTMLInputElement;
  const updateBtn = document.querySelector('.update-btn') as HTMLInputElement;
  const selectBtn = e.target as HTMLButtonElement;
  const carId = Number(selectBtn.getAttribute('car-id')) as number;

  inputText.disabled = false;
  inputColor.disabled = false;

  updateBtn.addEventListener('click', updateCarBtn.bind(updateBtn, inputText, inputColor, carId));
};

const updateCarBtn = async (
  inputText: HTMLInputElement,
  inputColor: HTMLInputElement,
  carId: number
): Promise<void> => {
  const value = inputText.value;
  const color = inputColor.value;

  const updatedCar: IText = {
    name: value,
    color: color,
  };

  if (!value) {
    inputText.placeholder = PLACEHOLDER_MESSAGE;
    return;
  } else {
    inputColor.placeholder = '';
  }

  inputText.value = '';
  inputColor.value = '#ffffff';
  inputText.disabled = true;
  inputColor.disabled = true;

  await updateCar(updatedCar, carId);
  await updateGarage();
  renderGarage();
};
