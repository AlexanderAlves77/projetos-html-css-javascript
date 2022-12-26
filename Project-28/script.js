const clock = () => {
  const hours = document.getElementById("hour")
  const minutes = document.getElementById("minute")
  const seconds = document.getElementById("second")
  const h = new Date().getHours()
  const m = new Date().getMinutes()
  const s = new Date().getSeconds()

  hours.innerHTML = h 
  minutes.innerHTML = m 
  seconds.innerHTML = s 
}

let interval = setInterval(clock, 1000)