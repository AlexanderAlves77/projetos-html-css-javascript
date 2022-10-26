const linkMenu = document.querySelector("a.link-menu")
const linkCloseMenu = document.querySelector(".close-icon")
const header = document.querySelector("header")

linkMenu.addEventListener("click", (e) => {
  e.preventDefault()
  header.classList.toggle("menu-open")
})

linkCloseMenu.addEventListener("click", (e) => {
  e.preventDefault()
  header.classList.toggle("menu-open")
})