import { createWinner } from '../../api/api';
import { getCreateBtn, getResetBtn } from '../../helpers/getElements';
import { getRaceBtn, getWinnerMessage } from '../../helpers/getElements';
import store from '../../store/store';
import { driveCar } from '../drive/stop/driveCar';

export const startRace = async (e: Event) => {
  store.isRace = true;
  const raceBtn = getRaceBtn();
  const resetBtn = getResetBtn();
  const message = getWinnerMessage();
  const createBtn = getCreateBtn();
  raceBtn.disabled = true;
  resetBtn.disabled = false;
  createBtn.disabled = true;

  store.cars.map(async (car) => {
    const asd = await driveCar(e, car.id);
    console.log(store.animation)
    if (store.animation[car.id].id === store.raceWinner.id) {
      const time = store.raceWinnerTime / 1000;
      message.innerHTML = `Winner ${car.name} ${time}sec`;
      console.log(store);
      const winnerObj = {
        id: car.id,
        wins: 1,
        time: time,
      };
      await createWinner(winnerObj);
    }
  });
};
