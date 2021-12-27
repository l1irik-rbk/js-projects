import { mainBg, welcomText } from '../helpers/constants'

export function changeBg(e) {
  const bgNumber = +e.target.dataset.bg
  mainBg.style.backgroundImage = `url('./assets/bg/${bgNumber}.jpg')`
  welcomText.style.display = 'none'
}