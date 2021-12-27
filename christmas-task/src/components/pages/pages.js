import { menuList, mainPage, toysPage, treePage, mainBtn, toysBtn, treeBtn, mainPageBtn, main } from '../helpers/constants'
import data from '../data'
import { draw } from '../tree-toys/tree-toys'
import Toys from '../toys'
import { newData } from '../toys'

function changeData() {
  if (!newData.length) return data.slice(0, 20)

  return newData
}

export function switchPage(e) {
  menuList.forEach(item => item.classList.remove('page--active'))

  if (!e.target.classList.contains('logo')) {
    e.target.classList.toggle('page--active')
  }

  if (e.target === toysBtn || e.target === mainPageBtn) {
    toysPage.classList.add('active')
    mainPage.classList.remove('active')
    treePage.classList.remove('active')
    main.style.backgroundImage = 'none'
  } else if (e.target === mainBtn) {
    const toys = new Toys();
    toys.draw(data);
    mainPage.classList.add('active')
    toysPage.classList.remove('active')
    treePage.classList.remove('active')
    main.style.backgroundImage = 'url(./assets/bg.webp)'
  } else if (e.target === treeBtn) {
    let data = changeData()
    draw(data)

    treePage.classList.add('active')
    toysPage.classList.remove('active')
    mainPage.classList.remove('active')
    main.style.backgroundImage = 'none'
  }
}
