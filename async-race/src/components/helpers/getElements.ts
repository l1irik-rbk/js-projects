export const getCar = (carId: number) => document.querySelector(`.car[data-id='${carId}'] svg`) as HTMLElement;
export const getFlag = (carId: number) => document.querySelector(`.flag[flag-id='${carId}'] svg`) as HTMLElement;
export const getStopBtn = (carId: number) =>
  document.querySelector(`.stop-engine[car-id='${carId}']`) as HTMLButtonElement;
export const getStartBtn = (carId: number) =>
  document.querySelector(`.start-engine[car-id='${carId}']`) as HTMLButtonElement;
