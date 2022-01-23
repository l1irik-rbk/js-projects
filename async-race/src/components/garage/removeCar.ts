import { deleteCar, deleteWinner } from '../api/api';
import { renderGarage, updateGarage } from '../render';

export const removeCar = async (e: Event): Promise<void> => {
  const removeBtn = e.target as HTMLButtonElement;
  const carId = Number(removeBtn.getAttribute('car-id')) as number;

  await deleteCar(carId);
  await deleteWinner(carId);
  await updateGarage();
  renderGarage();
};
