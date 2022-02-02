export const getCar = (carId: number): HTMLElement =>
  document.querySelector(`.car[data-id='${carId}'] svg`) as HTMLElement;
export const getFlag = (carId: number): HTMLElement =>
  document.querySelector(`.flag[flag-id='${carId}'] svg`) as HTMLElement;
export const getWinnersBtn = (): HTMLButtonElement => document.querySelector(`.winners-btn`) as HTMLButtonElement;
export const getStopBtn = (carId: number): HTMLButtonElement =>
  document.querySelector(`.stop-engine[car-id='${carId}']`) as HTMLButtonElement;
export const getStartBtn = (carId: number): HTMLButtonElement =>
  document.querySelector(`.start-engine[car-id='${carId}']`) as HTMLButtonElement;
export const getRaceBtn = (): HTMLButtonElement => document.querySelector(`.race-btn`) as HTMLButtonElement;
export const getWinnerMessage = (): HTMLButtonElement => document.querySelector(`.winner`) as HTMLButtonElement;
export const getResetBtn = (): HTMLButtonElement => document.querySelector(`.reset-btn`) as HTMLButtonElement;
export const getCreateBtn = (): HTMLButtonElement => document.querySelector(`.create-btn`) as HTMLButtonElement;
export const getGenerateBtn = (): HTMLButtonElement => document.querySelector(`.generate-btn`) as HTMLButtonElement;
export const getPrevBtn = (): HTMLButtonElement => document.querySelector(`.prev__btn`) as HTMLButtonElement;
export const getNextBtn = (): HTMLButtonElement => document.querySelector(`.next__btn`) as HTMLButtonElement;
