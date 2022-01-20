import './reset/reset.css';
import './style.css';
import { render } from './components/render';

render();

// (async () => await render())();

// const host = 'http://localhost:3000';

// const path = {
//   garage: '/garage',
//   winners: '/winners',
//   engine: '/engine',
// };

// export const getCars = async () => {
//   const response = await fetch(`${host}${path.garage}?_page=0&_limit=7`);
//   const data = await response.json();
//   console.log(data);
//   console.log(response.headers.get('X-Total-Count'));
// };
// // getCars();

// export const getCar = async () => {
//   const response = await fetch(`${host}${path.garage}/1`);
//   const data = await response.json();
//   console.log(data);
// };
// // getCar();

// export const createCar = async () => {
//   const car = {
//     name: 'Mazda',
//     color: '#000',
//   };
//   const response = await fetch(`${host}${path.garage}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(car),
//   });

//   const newCar = await response.json();
//   return newCar;
// };
// // createCar()

// export const deleteCar = async () => {
//   const response = await fetch(`${host}${path.garage}/16`, {
//     method: 'DELETE',
//   });

//   const car = await response.json();
//   return car;
// };
// // deleteCar()

// export const updateCar = async () => {
//   const car = {
//     name: 'Audi',
//     color: '#SSS',
//   };
//   const response = await fetch(`${host}${path.garage}/15`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(car),
//   });

//   const newCar = await response.json();
//   return newCar;
// };
// // updateCar()

// export const startEngine = async () => {
//   const response = await fetch(`${host}${path.engine}?id=13&status=started`, {
//     method: 'PATCH',
//   });
//   const start = await response.json();
//   console.log(start);
//   return start;
// };
// // startEngine();

// export const stopEngine = async () => {
//   const response = await fetch(`${host}${path.engine}?id=13&status=stopped`, {
//     method: 'PATCH',
//   });
//   const stop = await response.json();
//   console.log(stop);
//   return stop;
// };
// // stopEngine();
