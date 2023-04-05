import Timer from "./timer.js"
import Sounds from "./sounds.js"

import { buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire,
  buttonIncrease,
  buttonDecrease,
  buttonPlay,
  buttonStop,
  minutes,
  seconds
 } from "./elements.js"

 minutes.textContent  = prompt("Quantos minutos?").padStart(2,"0")

const sounds = Sounds({
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire
})
const timer = Timer({
  seconds,
  minutes
})


 buttonIncrease.addEventListener('click', function()
 {
   timer.increase()
 })

 buttonDecrease.addEventListener('click', function()
 {
   timer.decrease()
 })

buttonPlay.addEventListener('click', function()
{
  timer.countdown()
})

buttonStop.addEventListener('click', function()
{
  timer.hold()
})

buttonForest.addEventListener('click', function() {
  sounds.forest()
})

buttonRain.addEventListener('click' , function() {
  sounds.rain()
})

buttonCoffe.addEventListener('click' , function() {
  sounds.coffe()

})

buttonFire.addEventListener('click' , function() {
  sounds.fire()
})
