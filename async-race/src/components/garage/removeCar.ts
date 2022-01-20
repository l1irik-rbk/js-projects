import { deleteCar } from '../api';
import { renderGarage, updateGarage } from '../render';

export const removeCar = async (e: Event) => {
  const removeBtn = e.target as HTMLButtonElement;
  const carId = Number(removeBtn.getAttribute('car-id')) as number;

  await deleteCar(carId);
  await updateGarage();
  renderGarage();
};
