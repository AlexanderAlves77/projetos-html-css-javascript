let container = document.getElementById("container")

window.onmousemove = (evt) => {
  let x = - evt.clientX / 5
  let y = - evt.clientY / 5
  container.style.backgroundPositionX = `${x}px`
  container.style.backgroundPositionY = `${y}px`
}