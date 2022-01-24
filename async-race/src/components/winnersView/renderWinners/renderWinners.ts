import { getCarImage } from '../../garageView/renderGarage/renderGarage';
import store from '../../store/store';
import { sortTable } from '../sort/sort';

export const renderTable = (): void => {
  const tbody = document.querySelector('tbody') as HTMLElement;
  tbody.innerHTML = '';

  store.winners.forEach(async (winner, index) => {
    const html = `
      <td>${index + 1}</td>
      <td>${getCarImage(winner.car.color)}</td>
      <td>${winner.car.name}</td>
      <td>${winner.wins}</td>
      <td>${winner.time}</td>
  `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.append(tr);
  });
};

export const renderWinners = (): void => {
  const html = `
    <h1 class="winners__header">Winners (${store.winnersCount})</h1>
    <h2 class="winners__page-heder">Page #${store.winnersPage}</h2>
    <table>
      <thead>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th class="wins-sort">Wins</th>
        <th class="time-sort">Best time(sec)</th>
      </thead>
      <tbody></tbody>
    </table>
  `;

  const winners = document.querySelector('.winners') as HTMLElement;
  winners.innerHTML = html;
  renderTable();
  sortTable();
};
