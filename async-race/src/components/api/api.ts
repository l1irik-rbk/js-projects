import { ICars, IGetWinners, ISuccess } from './../helpers/interfaces';
import { host, path } from '../helpers/constants';
import { IData, IText, IWinners, IWinnersRender } from '../helpers/interfaces';

export const getCars = async (page: number, limit = 7): Promise<ICars> => {
  const response = await fetch(`${host}${path.garage}?_page=${page}&_limit=${limit}`);
  const data: IData[] = await response.json();
  const count = Number(response.headers.get('X-Total-Count'));

  return {
    data,
    count,
  };
};

export const getCar = async (id: number): Promise<IData[]> => {
  const response = await fetch(`${host}${path.garage}/${id}`);
  const data: IData[] = await response.json();

  return data;
};

export const createCar = async (newCar: IText): Promise<IData[]> => {
  const response = await fetch(`${host}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCar),
  });
  const car: IData[] = await response.json();

  return car;
};

export const deleteCar = async (id: number): Promise<IData[]> => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'DELETE',
  });
  const car: IData[] = await response.json();

  return car;
};

export const updateCar = async (car: IText, id: number): Promise<IData[]> => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  const newCar: IData[] = await response.json();

  return newCar;
};

export const startEngine = async (id: number): Promise<IWinners> => {
  const response = await fetch(`${host}${path.engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const start: IWinners = await response.json();

  return start;
};

export const stopEngine = async (id: number): Promise<IWinners> => {
  const response = await fetch(`${host}${path.engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  const stop: IWinners = await response.json();

  return stop;
};

export const driving = async (id: number): Promise<ISuccess> => {
  const response = await fetch(`${host}${path.engine}?id=${id}&status=drive`, {
    method: 'PATCH',
  });

  if (response.status !== 200) {
    return { success: false };
  } else {
    const success: ISuccess = await response.json();
    return success;
  }
};

const sortWinners = (sorted: string, order: string): string => {
  if (sorted && order) return `&_sort=${sorted}&_order=${order}`;
  return '';
};

export const getWinners = async (page: number, sorted = '', order = '', limit = 10): Promise<IGetWinners> => {
  const response = await fetch(`${host}${path.winners}?_page=${page}&_limit=${limit}${sortWinners(sorted, order)}`);
  const data = await response.json();
  const count = Number(response.headers.get('X-Total-Count'));
  const newData: IWinnersRender[] = await Promise.all(
    data.map(async (winner: IWinners) => ({ ...winner, car: await getCar(winner.id) }))
  );

  return {
    data: newData,
    count,
  };
};

export const checkCurrentWinner = async (id: number): Promise<number> => {
  const status = (await fetch(`${host}${path.winners}/${id}`)).status;

  return status;
};

export const getWinner = async (id: number): Promise<IWinners> => {
  const response = await fetch(`${host}${path.winners}/${id}`);
  const winner = await response.json();

  return winner;
};

export const updateWinner = async (winner: IWinners, id: number): Promise<IWinners> => {
  const oldRace = await getWinner(id);
  const oldTime: number = oldRace.time;
  const oldWin: number = oldRace.wins;

  const response = await fetch(`${host}${path.winners}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      wins: oldWin + 1,
      time: oldTime < winner.time ? oldTime : winner.time,
    }),
  });

  const newWinner = await response.json();

  return newWinner;
};

export const createNewWinner = async (winner: IWinners): Promise<IWinners> => {
  const response = await fetch(`${host}${path.winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner),
  });

  const car = await response.json();

  return car;
};

export const createWinner = async (winner: IWinners): Promise<void> => {
  const currentWinnerStatus: number = await checkCurrentWinner(winner.id);

  if (currentWinnerStatus === 404) {
    await createNewWinner(winner);
  } else {
    await updateWinner(winner, winner.id);
  }
};

export const deleteWinner = async (id: number): Promise<IData[]> => {
  const response = await fetch(`${host}${path.winners}/${id}`, {
    method: 'DELETE',
  });

  const deleted: IData[] = await response.json();

  return deleted;
};
