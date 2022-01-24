import { renderGarage } from '../garageView/renderGarage/renderGarage';
import { updateWinners } from '../mainRender/render';
import { updateGarage } from '../mainRender/render';
import store from '../store/store';
import { renderWinners } from '../winnersView/renderWinners/renderWinners';

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
