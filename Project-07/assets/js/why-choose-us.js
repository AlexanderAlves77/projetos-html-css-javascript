const reasonsItems = document.querySelectorAll(".why-choose-us .reasons .reason-item")

reasonsItems.forEach((itemElement) => {
  itemElement.addEventListener("click", (e) => {
    e.preventDefault()
    reasonsItems.forEach((item) => item.classList.remove('active'))
    itemElement.classList.add('active')
  })
})