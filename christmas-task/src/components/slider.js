import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css'

export const sliderCount = document.getElementById('slider__count');
export const sliderYear = document.getElementById('slider__year');
export const minCount = document.querySelector('.min-count')
export const maxCount = document.querySelector('.max-count')
export const minYear = document.querySelector('.min-year')
export const maxYear = document.querySelector('.max-year')


noUiSlider.create(sliderCount, {
  start: [1, 12],
  connect: true,
  step: 1,
  range: {
    'min': 1,
    'max': 12
  }
});

noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  connect: true,
  step: 10,
  range: {
    'min': 1940,
    'max': 2020
  }
});
