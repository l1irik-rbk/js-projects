import { renderGarage, updateGarage } from './../render';
import { createCar } from './../api';
import { IText } from '../helpers/interfaces';
import { PLACEHOLDER_MESSAGE } from '../helpers/constants';

export const generateCar = async () => {
  const inputCreate = document.querySelector('.car__form-create .input-text') as HTMLInputElement;
  const inputColor = document.querySelector('.car__form-create .input-color') as HTMLInputElement;
  const value = inputCreate.value;
  const color = inputColor.value;

  if (!value) {
    inputCreate.placeholder = PLACEHOLDER_MESSAGE;
    return;
  } else {
    inputCreate.placeholder = '';
  }

  inputCreate.value = '';
  inputColor.value = '#ffffff';

  const newCar: IText = {
    name: value,
    color: color,
  };

  await createCar(newCar);
  await updateGarage();
  renderGarage();
};
