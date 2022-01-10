import { treeBox } from '../helpers/constants';

export function changeTree(e: Event): void {
  const treeNumber = (e.target as HTMLElement).dataset.tree as string;
  treeBox.src = `./assets/tree/${treeNumber}.png`;
  treeBox.style.backgroundImage = 'none';

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('treeNumber', treeNumber);
  });
}

function getLocalStorage(): void {
  treeBox.style.backgroundImage = 'none';
  if (localStorage.getItem('treeNumber')) {
    const treeNumber = localStorage.getItem('treeNumber');
    treeBox.src = `./assets/tree/${treeNumber}.png`;
  }
}
window.addEventListener('load', getLocalStorage);
