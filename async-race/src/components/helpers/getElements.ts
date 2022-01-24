export const getCar = (carId: number) => document.querySelector(`.car[data-id='${carId}'] svg`) as HTMLElement;
export const getFlag = (carId: number) => document.querySelector(`.flag[flag-id='${carId}'] svg`) as HTMLElement;
export const getWinnersBtn = () => document.querySelector(`.winners-btn`) as HTMLButtonElement;
export const getStopBtn = (carId: number) =>
  document.querySelector(`.stop-engine[car-id='${carId}']`) as HTMLButtonElement;
export const getStartBtn = (carId: number) =>
  document.querySelector(`.start-engine[car-id='${carId}']`) as HTMLButtonElement;
export const getRaceBtn = () => document.querySelector(`.race-btn`) as HTMLButtonElement;
export const getWinnerMessage = () => document.querySelector(`.winner`) as HTMLButtonElement;
export const getResetBtn = () => document.querySelector(`.reset-btn`) as HTMLButtonElement;
export const getCreateBtn = () => document.querySelector(`.create-btn`) as HTMLButtonElement;
export const getGenerateBtn = () => document.querySelector(`.generate-btn`) as HTMLButtonElement;
export const getPrevBtn = () => document.querySelector(`.prev__btn`) as HTMLButtonElement;
export const getNextBtn = () => document.querySelector(`.next__btn`) as HTMLButtonElement;
