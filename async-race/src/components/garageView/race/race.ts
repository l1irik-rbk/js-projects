import { getGenerateBtn, getNextBtn, getPrevBtn } from './../../helpers/getElements';
import { createWinner } from '../../api/api';
import { getCreateBtn, getResetBtn, getWinnersBtn } from '../../helpers/getElements';
import { getRaceBtn, getWinnerMessage } from '../../helpers/getElements';
import store from '../../store/store';
import { driveCar } from '../drive/stop/driveCar';

export const startRace = async (e: Event) => {
  store.isRace = true;
  const raceBtn = getRaceBtn();
  const resetBtn = getResetBtn();
  const message = getWinnerMessage();
  const createBtn = getCreateBtn();
  const winnersBtn = getWinnersBtn();
  const generateBtn = getGenerateBtn();
  const prevBtn = getPrevBtn();
  const nextBtn = getNextBtn();
  raceBtn.disabled = true;
  resetBtn.disabled = false;
  createBtn.disabled = true;
  winnersBtn.disabled = true;
  generateBtn.disabled = true;
  prevBtn.disabled = true;
  nextBtn.disabled = true;

  store.cars.map(async (car) => {
    const carID = await driveCar(e, car.id);
    if (store.animation[carID].id === store.raceWinner.id) {
      const time = store.raceWinnerTime / 1000;
      message.innerHTML = `Winner ${car.name} ${time}sec`;

      const winnerObj = {
        id: car.id,
        wins: 1,
        time: time,
      };
      await createWinner(winnerObj);
    }
  });
};
