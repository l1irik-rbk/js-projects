export interface IData {
  color: string;
  count: string;
  favorite: boolean;
  isSelected?: boolean;
  name: string;
  num: string;
  shape: string;
  size: string;
  year: string;
}

export interface IFilterObject {
  ball?: boolean;
  bell?: boolean;
  cone?: boolean;
  figurine?: boolean;
  snowflake?: boolean;
  blue?: boolean;
  green?: boolean;
  red?: boolean;
  white?: boolean;
  yellow?: boolean;
  big?: boolean;
  little?: boolean;
  middle?: boolean;
  favorite?: boolean;
}

export interface IObjet {
  count: Array<string>;
  year: Array<string>;
  shape?: Array<string>;
  color?: Array<string>;
  size?: Array<string>;
  favorite?: Array<boolean>;
}

export interface IMainObj {
  shape: {
    ['bell']: boolean;
    ['ball']: boolean;
    ['cone']: boolean;
    ['snowflake']: boolean;
    ['figurine']: boolean;
  };
  color: {
    ['white']: boolean;
    ['yellow']: boolean;
    ['red']: boolean;
    ['blue']: boolean;
    ['green']: boolean;
  };
  size: {
    ['big']: boolean;
    ['middle']: boolean;
    ['little']: boolean;
  };
  favorite: {
    ['favorite']: boolean;
  };
  count: {
    start: number;
    end: number;
  };
  year: {
    start: number;
    end: number;
  };
}

export interface IKeys {
  [key: string]: string;
}
