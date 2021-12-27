const audio = new Audio()
audio.src = './assets/audio/audio.mp3'
audio.volume = 0.1

export function playMusic() {
  if (audio.paused === true) {
    audio.play()
  } else {
    audio.pause()
  }
}