import { IStore, IData } from './helpers/interfaces';
import { getCars, getWinners } from './api';

const { data: cars, count: carsCount } = await getCars(1);

export default {
  cars,
  carsCount,
  carsPage: 1,
  veiw: 'garage',
} as IStore;
