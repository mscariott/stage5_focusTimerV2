const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonFire = document.querySelector('.fire')

const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const soundForest = new Audio("./sounds/Floresta.wav")
const soundRain = new Audio("./sounds/Chuva.wav")
const soundCoffe = new Audio("./sounds/Cafeteria.wav")
const soundFire = new Audio("./sounds/Lareira.wav")

soundForest.loop = true
soundRain.loop = true
soundCoffe.loop = true
soundFire.loop = true

export {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire,
  minutes,
  seconds,
  soundForest,
  soundCoffe,
  soundFire,
  soundRain
}