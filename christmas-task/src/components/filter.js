import Toys from './toys'
import data from './data';

// const filtred = {

// }


export default class FilterToys {
  constructor() {
    // this.data = data
    // this.select = document.querySelector('#select').addEventListener('change', this.sorted)
    // console.log(this.select)
  }

  // get length() {
  //   return this.data.length
  // }

  // filter() {
  //   return this.data
  // }

  sorted(e) {
    const toysInner = document.querySelector('.toys__inner')
    toysInner.innerHTML = ''

    let arr 
    if (e.target.value === 'По названию от А до Я') {
      arr = data.sort((a, b) => {
        if (a.name < b.name) return -1 
      })
    } else if (e.target.value === 'По названию от Я до А') {
      arr = data.sort((a, b) => {
        if (a.name > b.name) return -1 
      })
    } else if (e.target.value === 'По возрастанию') {
      arr = data.sort((a, b) => {
        if (+a.count < +b.count) return -1 
      })
    } else if (e.target.value === 'По убыванию') {
      arr = data.sort((a, b) => {
        if (+a.count > +b.count) return -1 
      })
    }

    const asd = new Toys().draw(arr)
  }

  
}

// export let arr
// export default arr
// let str = new FilterToys()
// new Toys().draw(data)
// console.log(str1)