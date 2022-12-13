let section = document.querySelector("section")

const scrollImage = () => {
  let value = window.scrollY 
  section.style.clipPath = `circle(${value}px at center)`
}

window.addEventListener("scroll", scrollImage)