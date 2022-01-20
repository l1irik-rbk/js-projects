import { renderGarage } from './../render';
import { updateGarage } from '../render';
import store from '../store/store';

export const getNextPage = async (): Promise<void> => {
  store.carsPage++;
  await updateGarage();
  renderGarage();
};
