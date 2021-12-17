import Toys from './toys'
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

  reset() {

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

const mainObj = {
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

document.querySelector('#select').addEventListener('change', e => new FilterToys().sorted(e))
document.querySelector('.filters__forms-btns').addEventListener('click', callFilter)
document.querySelector('.filters__color').addEventListener('click', callFilter)
document.querySelector('.filters__size-checkboxes').addEventListener('click', callFilter)
document.querySelector('.filters__size-favorite').addEventListener('click', callFilter)

function callFilter(e) {
  new FilterToys().filtred(e)
}


