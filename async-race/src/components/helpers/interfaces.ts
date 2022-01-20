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
