import { treeBox, welcomText } from '../helpers/constants'

export function changeTree(e) {
  const treeNumber = e.target.dataset.tree
  treeBox.src = `./assets/tree/${treeNumber}.png`
  welcomText.style.display = 'none'
}

