import { renderView, updateWinners } from '../../mainRender/render';
import store from '../../store/store';

export const sortTable = (): void => {
  const winsColumn = document.querySelector('.wins-sort') as HTMLElement;
  const timeColumn = document.querySelector('.time-sort') as HTMLElement;

  winsColumn.addEventListener('click', sortWins);
  timeColumn.addEventListener('click', sortTime);
};

const sortWins = async (): Promise<void> => {
  getOrder();
  store.sorted = 'wins';
  await updateWinners();
  renderView();
};

const sortTime = async (): Promise<void> => {
  getOrder();
  store.sorted = 'time';
  await updateWinners();
  renderView();
};

const getOrder = (): void => {
  store.order = store.order === 'asc' ? 'desc' : 'asc';
};
