let slide = document.getElementById("slide")
window.onmousemove = function(evt) {
  let x = evt.clientX 
  slide.style.left = `${x}px`
}