const openBtn = document.querySelector(".open")
const modalContainer = document.querySelector(".modal-container")
const closeBtn = document.querySelector(".modal-btn")

const showModal = () => {
  modalContainer.classList.add("show")
}

const closeModal = () => {
  modalContainer.classList.remove("show")
}

openBtn.addEventListener("click", showModal)
closeBtn.addEventListener("click", closeModal)