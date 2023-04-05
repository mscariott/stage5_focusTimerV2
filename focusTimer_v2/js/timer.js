export default function Timer({
  seconds,
  minutes
}) {

  let timerTimeOut
  let newSeconds
  let newMinutes

  function countdown(startMinutes) {

    newSeconds = Number(seconds.textContent)
    newMinutes = Number(minutes.textContent)

    timerTimeOut = setTimeout(function () {

      newSeconds--
      seconds.textContent = String(newSeconds).padStart(2, "0")


      if (newSeconds < 0) {
        seconds.textContent = String(59)
        minutes.textContent = String(newMinutes - 1).padStart(2, "0")
      }

      if (newMinutes <= 0 && newSeconds < 0) {
        seconds.textContent = String(0).padStart(2, "0")
        minutes.textContent = prompt("Quantos minutos?").padStart(2, "0")
        return
      }

      countdown()
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function increase() {  
    newMinutes = Number(minutes.textContent) + 5
    minutes.textContent = String(newMinutes).padStart(2,"0")
  }

  function decrease() { 
    if (Number(minutes.textContent) >= 5) {
      newMinutes = Number(minutes.textContent) - 5
    }else{
      newMinutes = 0
    }
    minutes.textContent = String(newMinutes).padStart(2,"0")
  }

  return {
    countdown,
    hold,
    decrease,
    increase
  }
}