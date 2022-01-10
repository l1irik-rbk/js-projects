const audio = new Audio();
audio.src = './assets/audio/audio.mp3';
audio.volume = 0.1;

export function playMusic(): void {
  if (audio.paused) {
    audio.play();
    audioFlag = true;
  } else {
    audio.pause();
    audioFlag = false;
  }
  document.body.removeEventListener('click', playMusic);
}

let audioFlag = false;

function setLocalStorage(): void {
  localStorage.setItem('audioFlag', JSON.stringify(audioFlag));
}

function getLocalStorage(): void {
  if (localStorage.getItem('audioFlag')) {
    const audioFlag = localStorage.getItem('audioFlag');
    if (audioFlag === 'true') {
      document.body.addEventListener('click', playMusic);
    }
  }
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
