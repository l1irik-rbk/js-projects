export interface IData {
  name: string;
  color: string;
  id: number;
  time?: number;
  wins?: number;
}

export interface IWinners {
  [key: string]: number;
}

export interface IStore {
  cars: IData[];
  carsCount: number;
  carsPage: number;
  veiw: string;
  animation: IAnimation;
  isRace: boolean;
  raceWinner: IId;
  raceWinnerTime: number;
  winners: IWinners[];
  winnersCount: number;
  winnersPage: number;
  sorted: string;
  order: string;
}

export interface IText {
  [key: string]: string;
}

export interface IRender {
  [key: string]: IName;
}

export interface IName {
  classes: string[];
  htmlElement: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  hasId?: boolean;
  hasListener?: boolean;
}

export interface ICarParams {
  [key: string]: number;
}

export interface IAnimation {
  [key: number]: IId;
}

export interface IId {
  [key: string]: number;
}
