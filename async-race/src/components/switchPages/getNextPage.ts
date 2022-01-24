import { renderGarage, renderWinners, updateWinners } from './../render';
import { updateGarage } from '../render';
import store from '../store/store';

export const getNextPage = async (): Promise<void> => {
  if (store.veiw === 'garage') {
    store.carsPage++;
    await updateGarage();
    renderGarage();
  } else {
    store.winnersPage++;
    await updateWinners();
    renderWinners();
  }
};
