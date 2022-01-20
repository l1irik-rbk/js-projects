import { IRender } from './interfaces';

export const PLACEHOLDER_MESSAGE = 'Enter car name!';
export const MAX_CARS_ON_PAGE = 7;

export const HEADER_BTNS: IRender = {
  garageBtn: {
    classes: ['btn', 'garage-btn'],
    htmlElement: 'button',
    disabled: true,
    hasListener: true,
  },
  winnersBtn: {
    classes: ['btn', 'winners-btn'],
    htmlElement: 'button',
    hasListener: true,
  },
};

export const SETTINGS_BTNS: IRender = {
  raceBtn: {
    classes: ['btn', 'race-btn'],
    htmlElement: 'button',
  },
  resetBtn: {
    classes: ['btn', 'reset-btn'],
    htmlElement: 'button',
  },
  generateBtn: {
    classes: ['btn', 'generate-btn'],
    htmlElement: 'button',
    hasListener: true,
  },
};

export const FORM_CREATE: IRender = {
  inputText: {
    classes: ['input-text'],
    htmlElement: 'input',
    type: 'text',
  },
  inputColor: {
    classes: ['input-color'],
    htmlElement: 'input',
    type: 'color',
    value: '#ffffff',
  },
  createBtn: {
    classes: ['btn', 'create-btn'],
    htmlElement: 'button',
    hasListener: true,
  },
};

export const FORM_UPDATE: IRender = {
  inputText: {
    classes: ['input-text'],
    htmlElement: 'input',
    type: 'text',
    disabled: true,
  },
  inputColor: {
    classes: ['input-color'],
    htmlElement: 'input',
    type: 'color',
    value: '#ffffff',
    disabled: true,
  },
  updateBtn: {
    classes: ['btn', 'update-btn'],
    htmlElement: 'button',
  },
};

export const GARAGE_ELEMENT_BTNS: IRender = {
  selectBtn: {
    classes: ['btn', 'select-btn'],
    htmlElement: 'button',
    hasId: true,
    hasListener: true,
  },
  removeBtn: {
    classes: ['btn', 'remove-btn'],
    htmlElement: 'button',
    hasId: true,
    hasListener: true,
  },
  carName: {
    classes: ['car__name'],
    htmlElement: 'span',
  },
};

export const CAR_ENGINE_CONTROLS: IRender = {
  startEngine: {
    classes: ['btn', 'start-engine'],
    htmlElement: 'button',
    hasId: true,
    hasListener: true,
  },
  stopEngine: {
    classes: ['btn', 'stop-engine'],
    htmlElement: 'button',
    disabled: true,
    hasId: true,
    hasListener: true,
  },
};

export const PAGES_BTNS: IRender = {
  prevBtn: {
    classes: ['btn', 'prev__btn'],
    htmlElement: 'button',
    disabled: true,
    hasListener: true,
  },
  nextBtn: {
    classes: ['btn', 'next__btn'],
    htmlElement: 'button',
    disabled: true,
    hasListener: true,
  },
};

export const modelsCars: string[] = [
  'Roadster',
  'S',
  'X',
  '3',
  'Y',
  'Cybertruck',
  'X5',
  'X7',
  'X3',
  'X6',
  'GT4',
  'FXX',
  '599 GTO',
  'Enzo',
  '458 Italia',
  '250 GTO',
  'Priora',
  '4x4',
  'Rio',
  'Focus',
  'Kalina',
  'Vesta',
  'Spark',
  'Lacetti',
  'Nexia',
  'Matiz',
  'Cobalt',
  'Captiva',
  'A7',
  'A5',
  'A3',
  'A8',
  'TT',
  'Corolla',
  'Camry',
  'RAV4',
  'Impreza',
  'WRX',
  'ES',
  'LS',
  'RX',
  'GX',
  'LX',
  'GS',
  'LC500',
  'Gallardo',
  'Aventador',
  '911',
  'Cayenne',
  'FX37',
];

export const brandsCars: string[] = [
  'Audi',
  'Alfa Romeo',
  'Alpina',
  'Aston Martin',
  'Axon',
  'Ford',
  'Ferrari',
  'Fiat',
  'GAZ',
  'GMC',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Isuzu',
  'JAC',
  'Jaguar',
  'Jeep',
  'Kamaz',
  'Lada',
  'Lexus',
  'Lotus',
  'MAN',
  'Maybach',
  'MAZ',
  'Mazda',
  'McLaren',
  'Nissan',
  'Opel',
  'Paccar',
  'Pagani',
  'Pontiac',
  'Porsche',
  'Renault',
  'Å koda',
  'Smart',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'UAZ',
  'Volvo',
  'ZAZ',
  'XPeng',
  'TVR',
  'Saab',
  'RAM',
  'Chevrolet',
  'Mazzanti',
  'Daewoo',
];
