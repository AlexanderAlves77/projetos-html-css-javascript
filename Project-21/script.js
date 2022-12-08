document.addEventListener("mousemove" , (evt) => {
  let body = document.querySelector("body")
  let heart = document.querySelector("span")
  let x = evt.offsetX
  let y = evt.offsetY
  heart.style.left = `${x}px`
  heart.style.top = `${y}px`
  body.appendChild(heart)
})