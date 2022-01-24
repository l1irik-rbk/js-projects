import { IStore } from '../helpers/interfaces';
import { getCars, getWinners } from '../api/api';
import { STARTED_PAGE } from '../helpers/constants';

const { data: cars, count: carsCount } = await getCars(STARTED_PAGE);
const { data: winners, count: winnersCount } = await getWinners(STARTED_PAGE);

export default {
  cars,
  carsCount,
  carsPage: 1,
  winners,
  winnersCount,
  winnersPage: 1,
  veiw: 'garage',
  animation: {},
  isRace: false,
  raceWinner: {},
  raceWinnerTime: 0,
  sorted: '',
  order: '',
} as IStore;
