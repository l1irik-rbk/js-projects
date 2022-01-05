import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { target } from 'nouislider';

export const sliderCount = document.getElementById('slider__count') as target;
export const sliderYear = document.getElementById('slider__year') as target;
export const minCount = document.querySelector('.min-count') as HTMLElement;
export const maxCount = document.querySelector('.max-count') as HTMLElement;
export const minYear = document.querySelector('.min-year') as HTMLElement;
export const maxYear = document.querySelector('.max-year') as HTMLElement;

noUiSlider.create(sliderCount, {
  start: [1, 12],
  connect: true,
  step: 1,
  range: {
    min: 1,
    max: 12,
  },
});

noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  connect: true,
  step: 10,
  range: {
    min: 1940,
    max: 2020,
  },
});
