let iconBox = document.querySelectorAll(".iconBox")
let contentBox = document.querySelectorAll(".contentBox")

for (let i = 0; i < iconBox.length; i++) {
  iconBox[i].addEventListener('mouseover', function () {

    for (let j = 0; j < contentBox.length; j++) {
      contentBox[j].className = 'contentBox'
    }
    document.getElementById(this.dataset.id).className = 'contentBox active'

    for (let l = 0; l < iconBox.length; l++) {
      iconBox[l].className = 'iconBox'
    }
    this.className = 'iconBox active'
  })
}