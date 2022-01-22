export interface IData {
  name: string;
  color: string;
  id: number;
}

export interface IStore {
  cars: IData[];
  carsCount: number;
  carsPage: number;
  veiw: string;
  animation: IAnimation;
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
