import { IRender } from './interfaces';

export const PLACEHOLDER_MESSAGE = 'Enter car name!';

export const HEADER_BTNS: IRender = {
  garageBtn: {
    classes: ['btn', 'garage-btn'],
    htmlElement: 'button',
  },
  winnersBtn: {
    classes: ['btn', 'winners-btn'],
    htmlElement: 'button',
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
  },
  stopEngine: {
    classes: ['btn', 'stop-engine'],
    htmlElement: 'button',
    disabled: true,
    hasId: true,
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
