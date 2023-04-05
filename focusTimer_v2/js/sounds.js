import {
  soundForest,
  soundCoffe,
  soundFire,
  soundRain
} from "./elements.js"

export default function Sounds({
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire
}) {

  function forest() {

    buttonForest.classList.toggle('on')
    buttonRain.classList.remove('on')
    buttonCoffe.classList.remove('on')
    buttonFire.classList.remove('on')

    toogleSound(soundForest)  
  }

  function rain() {
    buttonForest.classList.remove('on')
    buttonRain.classList.toggle('on')
    buttonCoffe.classList.remove('on')
    buttonFire.classList.remove('on')

    toogleSound(soundRain)
  }

  function coffe() {
    buttonForest.classList.remove('on')
    buttonRain.classList.remove('on')
    buttonCoffe.classList.toggle('on')
    buttonFire.classList.remove('on')

    toogleSound(soundCoffe)
  }

  function fire() {
    buttonForest.classList.remove('on')
    buttonRain.classList.remove('on')
    buttonCoffe.classList.remove('on')
    buttonFire.classList.toggle('on')

    toogleSound(soundFire)
  }


  function toogleSound(soundButton) {

    if (soundButton.paused) {
      soundCoffe.pause()
      soundFire.pause()
      soundForest.pause()
      soundRain.pause()
      soundButton.play()
    } else {
      soundButton.pause()
    }

  }

  return {
    forest,
    rain,
    coffe,
    fire
  }
}