const fullImg = document.querySelector(".full-img")
const modal = document.querySelector(".modal")
const smallImg = document.querySelectorAll(".gallery img")

smallImg.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open")
    fullImg.classList.add("open")

    // Changin' the images dynamically
    const originalQuality = img.getAttribute("alt")
    fullImg.src = `img/full/${originalQuality}.jpg`
  })
})

modal.addEventListener("click", (evt) => {
  if(evt.target.classList.contains("modal")) {
    modal.classList.remove("open")
    fullImg.classList.remove("open")
  }
})