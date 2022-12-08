document.addEventListener("mousemove" , (evt) => {
  let body = document.querySelector("body")
  let heart = document.createElement("span")
  let x = evt.offsetX
  let y = evt.offsetY

  heart.style.left = `${x}px`
  heart.style.top = `${y}px`
  let size = Math.random() * 100

  heart.style.width = 20 + size + 'px'
  heart.style.height = 20 + size + 'px'
  body.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 2000)
})