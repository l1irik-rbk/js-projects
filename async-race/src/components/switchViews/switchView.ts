import { renderView, updateGarage, updateWinners } from '../mainRender/render';
import store from '../store/store';

export const showWinners = async (e: Event) => {
  const winnersBtn = e.target as HTMLButtonElement;
  const garageBtn = document.querySelector('.garage-btn') as HTMLButtonElement;
  const garaegContainer = document.querySelector('.garage__container') as HTMLElement;
  garaegContainer.innerHTML = '';
  store.veiw = 'winners';
  winnersBtn.disabled = true;
  garageBtn.disabled = false;
  await updateWinners();
  renderView();
};

export const showGarage = async (e: Event) => {
  const garageBtn = e.target as HTMLButtonElement;
  const winnersBtn = document.querySelector('.winners-btn') as HTMLButtonElement;
  const winners = document.querySelector('.winners') as HTMLElement;
  winners.innerHTML = '';
  store.veiw = 'garage';
  garageBtn.disabled = true;
  winnersBtn.disabled = false;
  await updateGarage();
  renderView();
};
