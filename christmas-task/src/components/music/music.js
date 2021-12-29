const audio = new Audio()
audio.src = './assets/audio/audio.mp3'
audio.volume = 0.1

export function playMusic() {
  if (audio.paused) {
    audio.play()
    audioFlag = true
  } else {
    audio.pause()
    audioFlag = false
  }
  document.body.removeEventListener('click', playMusic)
}

let audioFlag = false

function setLocalStorage() {
  localStorage.setItem('audioFlag', audioFlag);
}

function getLocalStorage() {
  if (localStorage.getItem('audioFlag')) {
    let audioFlag = localStorage.getItem('audioFlag');
    if (audioFlag === 'true') {
      document.body.addEventListener('click', playMusic)
    } 
  }
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);