import { IData, IText } from './helpers/interfaces';

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
// updateCar()

export const startEngine = async () => {
  const response = await fetch(`${host}${path.engine}?id=13&status=started`, {
    method: 'PATCH',
  });
  const start = await response.json();
  console.log(start);
  return start;
};
// startEngine();

export const stopEngine = async () => {
  const response = await fetch(`${host}${path.engine}?id=13&status=stopped`, {
    method: 'PATCH',
  });
  const stop = await response.json();
  console.log(stop);
  return stop;
};
// stopEngine();

export const getWinners = async () => {
  console.log('asd');
};
