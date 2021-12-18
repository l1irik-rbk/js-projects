import Toys, {toysArr} from './toys'
import data from './data';
import { sliderCount, sliderYear, minCount, maxCount, minYear, maxYear } from './slider'

let newData = data

export default class FilterToys {
  sorted(e) {
    let arr
    if (e.target.value === 'По названию от А до Я') {
      arr = newData.sort((a, b) => {
        if (a.name < b.name) return -1
      })
    } else if (e.target.value === 'По названию от Я до А') {
      arr = newData.sort((a, b) => {
        if (a.name > b.name) return -1
      })
    } else if (e.target.value === 'По возрастанию') {
      arr = newData.sort((a, b) => {
        if (+a.count < +b.count) return -1
      })
    } else if (e.target.value === 'По убыванию') {
      arr = newData.sort((a, b) => {
        if (+a.count > +b.count) return -1
      })
    }
    newData = arr
    this.filterData(newData, mainObj)
  }

  filtred(e) {
    if ((e.target.classList.contains('bell') || e.target.classList.contains('ball') || e.target.classList.contains('cone') || e.target.classList.contains('snowflake') || e.target.classList.contains('figurine')) && !e.target.classList.contains('toy--active')) {
      e.target.classList.add('toy--active')
      const dataAtr = e.target.dataset.icon
      mainObj.shape[dataAtr] = true
      this.filterData(newData, mainObj)
    } else if (e.target.classList.contains('toy--active')) {
      e.target.classList.remove('toy--active')
      const dataAtr = e.target.dataset.icon
      mainObj.shape[dataAtr] = false
      this.filterData(newData, mainObj)
    }

    if ((e.target.classList.contains('white') || e.target.classList.contains('yellow') || e.target.classList.contains('red') || e.target.classList.contains('blue') || e.target.classList.contains('green')) && !e.target.classList.contains('filters__color--active')) {
      e.target.classList.add('filters__color--active')
      const dataAtr = e.target.dataset.color
      mainObj.color[dataAtr] = true
      this.filterData(newData, mainObj)
    } else if (e.target.classList.contains('filters__color--active')) {
      e.target.classList.remove('filters__color--active')
      const dataAtr = e.target.dataset.color
      mainObj.color[dataAtr] = false
      this.filterData(newData, mainObj)
    }

    if (e.currentTarget.classList.contains('filters__size-checkboxes') && e.target.checked) {
      const targetId = e.target.id
      mainObj.size[`${targetId}`] = true
      delete mainObj.size['']
      this.filterData(newData, mainObj)
    } else if (e.currentTarget.classList.contains('filters__size-checkboxes')) {
      const targetId = e.target.id
      mainObj.size[`${targetId}`] = false
      delete mainObj.size['']
      this.filterData(newData, mainObj)
    }

    if (e.currentTarget.classList.contains('filters__size-favorite') && e.target.checked) {
      const targetId = e.target.id
      mainObj.favorite[`${targetId}`] = true
      delete mainObj.favorite['']
      this.filterData(newData, mainObj)
    } else if (e.currentTarget.classList.contains('filters__size-favorite')) {
      const targetId = e.target.id
      mainObj.favorite[`${targetId}`] = false
      delete mainObj.favorite['']
      this.filterData(newData, mainObj)
    }

    console.log(mainObj)
  }

  filterData(data, mainObj) {
    const shape = mainObj.shape
    const color = mainObj.color
    const size = mainObj.size
    const favorite = mainObj.favorite
    console.log(data)
    const keys = {
      ['bell']: 'колокольчик',
      ['ball']: 'шар',
      ['cone']: 'шишка',
      ['snowflake']: 'снежинка',
      ['figurine']: 'фигурка',
      ['white']: 'белый',
      ['yellow']: 'желтый',
      ['red']: 'красный',
      ['blue']: 'синий',
      ['green']: 'зелёный',
      ['big']: 'большой',
      ['middle']: 'средний',
      ['little']: 'малый',
      ['favorite']: true,
    }

    const object = {
      count: [],
      year: [],
    }

    for (let key in shape) {
      if (mainObj.shape[`${key}`]) {
        if (!object.shape) object.shape = []
        object.shape.push(keys[`${key}`])
      }
    }

    for (let key in color) {
      if (mainObj.color[`${key}`]) {
        if (!object.color) object.color = []
        object.color.push(keys[`${key}`])
      }
    }

    for (let key in size) {
      if (mainObj.size[`${key}`]) {
        if (!object.size) object.size = []
        object.size.push(keys[`${key}`])
      }
    }

    for (let key in favorite) {
      if (mainObj.favorite[`${key}`]) {
        if (!object.favorite) object.favorite = []
        object.favorite.push(keys[`${key}`])
      }
    }

    for (let i = mainObj.count.start; i <= mainObj.count.end; i++) {
      let count = i.toString()
      object.count.push(count)
    }

    for (let i = mainObj.year.start; i <= mainObj.year.end; i += 10) {
      let year = i.toString()
      object.year.push(year)
    }

    console.log(object)

    let filterdArr = this.filterArr(data, object)
    new Toys().draw(filterdArr)
  }

  filterArr(array, filters) {
    const keys = Object.keys(filters)
    return array.filter(el => {
      const commonKeys = keys.filter(key => el.hasOwnProperty(key));
      return commonKeys.reduce((flag, key) => (flag && filters[key].includes(el[key])), true);
    });
  }

  resetBtn() {
    for (let key in mainObj.shape) {
      mainObj.shape[`${key}`] = false
    }

    for (let key in mainObj.color) {
      mainObj.color[`${key}`] = false
    }

    for (let key in mainObj.size) {
      mainObj.size[`${key}`] = false
    }

    for (let key in mainObj.favorite) {
      mainObj.favorite[`${key}`] = false
    }

    mainObj.count.start = 1
    mainObj.count.end = 12
    mainObj.year.start = 1940
    mainObj.year.end = 2020

    forms.forEach(form => {
      if (form.classList.contains('toy--active')) form.classList.remove('toy--active')
    })

    colors.forEach(color => {
      if (color.classList.contains('filters__color--active')) color.classList.remove('filters__color--active')
    })

    sizes.forEach(size => {
      if (size.checked) size.checked = false
    })

    if (favorites.checked) favorites.checked = false
    sliderCount.noUiSlider.reset()
    sliderYear.noUiSlider.reset()
    minCount.textContent = 1
    maxCount.textContent = 12
    minYear.textContent = 1940
    maxYear.textContent = 2020

    this.filterData(newData, mainObj)
  }

  search() {
    const inner = document.querySelector('.toys__inner')
    const cards = inner.querySelectorAll('.card')
    const deleteText = document.querySelector('.filters__top-icon')
    const inputValue = search.value.toLowerCase()
    let arr = []

    deleteText.addEventListener('click', () => {
      search.value = ''
      cards.forEach(card => card.style.display = '')

    })

    cards.forEach(card => {
      const cardTitle = card.querySelector('h5')
      if (cardTitle.textContent.toLowerCase().indexOf(inputValue) > -1) {
        card.style.display = ''
      } else {
        card.style.display = 'none'
        arr.push('')
      }

      if (cards.length === arr.length) {
        console.log('Извините, совпадений не обнаружено')
      }
    })
  }
}

sliderCount.noUiSlider.on('slide', (values) => {
  let start = +values[0].split('.')[0]
  let end = +values[1].split('.')[0]
  mainObj.count.start = start
  mainObj.count.end = end
  minCount.textContent = start
  maxCount.textContent = end
  new FilterToys().filterData(newData, mainObj)
})

sliderYear.noUiSlider.on('slide', (values) => {
  let start = +values[0].split('.')[0]
  let end = +values[1].split('.')[0]
  mainObj.year.start = start
  mainObj.year.end = end
  minYear.textContent = start
  maxYear.textContent = end
  new FilterToys().filterData(newData, mainObj)
})

let mainObj = {
  shape: {
    ['bell']: false,
    ['ball']: false,
    ['cone']: false,
    ['snowflake']: false,
    ['figurine']: false,
  },
  color: {
    ['white']: false,
    ['yellow']: false,
    ['red']: false,
    ['blue']: false,
    ['green']: false,
  },
  size: {
    ['big']: false,
    ['middle']: false,
    ['little']: false,
  },
  favorite: {
    ['favorite']: false
  },
  count: {
    start: 1, end: 12
  },
  year: {
    start: 1940, end: 2020
  },
}

const select = document.querySelector('#select')
const form = document.querySelector('.filters__forms-btns')
const color = document.querySelector('.filters__color')
const size = document.querySelector('.filters__size-checkboxes')
const favorite = document.querySelector('.filters__size-favorite')
const reset = document.querySelector('.filters__btn-reset')
const search = document.querySelector('.filters__top-search')
const clearLocStor = document.querySelector('.filters__btn-settings')
const forms = form.querySelectorAll('button')
const colors = color.querySelectorAll('button')
const sizes = size.querySelectorAll('input')
const favorites = favorite.querySelector('input')

select.addEventListener('change', e => new FilterToys().sorted(e))
form.addEventListener('click', callFilter)
color.addEventListener('click', callFilter)
size.addEventListener('click', callFilter)
favorite.addEventListener('click', callFilter)
reset.addEventListener('click', () => new FilterToys().resetBtn())
search.addEventListener('keyup', () => new FilterToys().search())
clearLocStor.addEventListener('click', () => {
  localStorage.removeItem('mainObj')
  localStorage.removeItem('toysArr')
  localStorage.removeItem('newData')
  new FilterToys().filterData(newData, mainObj)
})

function callFilter(e) {
  new FilterToys().filtred(e)
}


function setLocalStorage() {
  localStorage.setItem('mainObj', JSON.stringify(mainObj));
  localStorage.setItem('newData', JSON.stringify(newData));
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('mainObj')) {
    mainObj = JSON.parse(localStorage.getItem('mainObj'));

    forms.forEach(form => {
      for (let key in mainObj.shape) {
        if (mainObj.shape[`${key}`] && form.classList.contains(`${key}`)) {
          form.classList.add('toy--active')
        }
      }
    })

    colors.forEach(color => {
      for (let key in mainObj.color) {
        if (mainObj.color[`${key}`] && color.classList.contains(`${key}`)) {
          color.classList.add('filters__color--active')
        }
      }
    })

    sizes.forEach(size => {
      for (let key in mainObj.cosizelor) {
        if (mainObj.size[`${key}`] && size.classList.contains(`${key}`)) {
          size.classList.add('filters__color--active')
        }
      }
    })

    if (mainObj.favorite[`favorite`]) favorites.checked = true
    minCount.textContent = mainObj.count.start
    maxCount.textContent = mainObj.count.end
    minYear.textContent = mainObj.year.start
    maxYear.textContent = mainObj.year.end

    sliderCount.noUiSlider.updateOptions({start: [mainObj.count.start, mainObj.count.end],})
    sliderYear.noUiSlider.updateOptions({start: [mainObj.year.start, mainObj.year.end],})
  }

  if (localStorage.getItem('newData')) {
    newData = JSON.parse(localStorage.getItem('newData'));
  }
  new FilterToys().filterData(newData, mainObj)
}
window.addEventListener('load', getLocalStorage);