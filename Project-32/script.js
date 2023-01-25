function parallax (evt) {
  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed')
    let x = (window.innerWidth - evt.pageX * speed) / 250
    let y = (window.innerWidth - evt.pageX * speed) / 250

    layer.style.transform = `translate(${-x}px) translateY(${y}px)`
  })
}

document.addEventListener('mousemove', parallax)