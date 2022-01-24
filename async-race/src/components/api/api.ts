import { IData, IText, IWinners } from '../helpers/interfaces';

const host = 'http://127.0.0.1:3000';

const path = {
  garage: '/garage',
  winners: '/winners',
  engine: '/engine',
};

export const getCars = async (page: number, limit = 7) => {
  const response = await fetch(`${host}${path.garage}?_page=${page}&_limit=${limit}`);
  const data: IData[] = await response.json();
  const count = Number(response.headers.get('X-Total-Count'));

  return {
    data,
    count,
  };
};

export const getCar = async (id: number) => {
  const response = await fetch(`${host}${path.garage}/${id}`);
  const data = await response.json();
  return data;
};

export const createCar = async (newCar: IText) => {
  const response = await fetch(`${host}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCar),
  });

  const car = await response.json();
  return car;
};

export const deleteCar = async (id: number) => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'DELETE',
  });

  const car = await response.json();
  return car;
};

export const updateCar = async (car: IText, id: number) => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });

  const newCar = await response.json();
  return newCar;
};

export const startEngine = async (id: number) => {
  const response = await fetch(`${host}${path.engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const start = await response.json();

  return start;
};

export const stopEngine = async (id: number) => {
  const response = await fetch(`${host}${path.engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  const stop = await response.json();

  return stop;
};

export const driving = async (id: number) => {
  const response = await fetch(`${host}${path.engine}?id=${id}&status=drive`, {
    method: 'PATCH',
  });

  if (response.status !== 200) {
    return { success: false };
  } else {
    return await response.json();
  }
};

const sortWinners = (sorted: string, order: string): string => {
  console.log(sorted, order);
  // return `&_sort=${'wins'}&_order=${'asd'}`;
  if (sorted && order) return `&_sort=${sorted}&_order=${order}`;
  return '';
};

export const getWinners = async (page: number, sorted = '', order = '', limit = 10) => {
  const response = await fetch(`${host}${path.winners}?_page=${page}&_limit=${limit}${sortWinners(sorted, order)}`);
  console.log(response);
  const data = await response.json();
  const count = Number(response.headers.get('X-Total-Count'));

  return {
    data: await Promise.all(data.map(async (winner) => ({ ...winner, car: await getCar(winner.id) }))),
    count,
  };
};

export const checkCurrentWinner = async (id: number) => {
  const status = (await fetch(`${host}${path.winners}/${id}`)).status;
  return status;
};

export const getWinner = async (id: number) => {
  const response = await fetch(`${host}${path.winners}/${id}`);
  const winner = await response.json();
  return winner;
};

export const updateWinner = async (winner, id: number) => {
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

export const createNewWinner = async (winner) => {
  console.log(winner);
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

export const createWinner = async (winner) => {
  const currentWinnerStatus: number = await checkCurrentWinner(winner.id);

  if (currentWinnerStatus === 404) {
    await createNewWinner(winner);
  } else {
    await updateWinner(winner, winner.id);
  }
};

export const deleteWinner = async (id: number) => {
  const response = await fetch(`${host}${path.winners}/${id}`, {
    method: 'DELETE',
  });

  const deleted = await response.json();
  return deleted;
};
