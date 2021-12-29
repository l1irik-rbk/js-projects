import { treeBox } from '../helpers/constants'

export function changeTree(e) {
  const treeNumber = e.target.dataset.tree
  treeBox.src = `./assets/tree/${treeNumber}.png`
  treeBox.style.backgroundImage = 'none'

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('treeNumber', treeNumber);
  });
}

function getLocalStorage() {
  treeBox.style.backgroundImage = 'none'
  if (localStorage.getItem('treeNumber')) {
    const treeNumber = localStorage.getItem('treeNumber');
    treeBox.src = `./assets/tree/${treeNumber}.png`
  }
}
window.addEventListener('load', getLocalStorage);