import { IStore } from '../helpers/interfaces';
import { getCars, getWinners } from '../api/api';
import { STARTED_PAGE } from '../helpers/constants';

const { data: cars, count: carsCount } = await getCars(STARTED_PAGE);

export default {
  cars,
  carsCount,
  carsPage: 1,
  veiw: 'garage',
  animation: {},
  isRace: false,
  raceWinner: {},
  raceWinnerTime: 0,
} as IStore;
