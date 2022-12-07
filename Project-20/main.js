class Vagalume {
  constructor() {
    this.x = 0
    this.y = 0
    this.baseY = Math.random() * 300 
    this.el = document.createElement("img")
    this.el.src = "imgs/vagalume.gif"
    this.el.alt = "Vagalume"
    document.querySelector("#vagalumes").appendChild(this.el)
  }

  movimentar() {
    this.x += 3
    this.y = this.baseY + Math.cos(this.x / 30) * 10

    if (this.x >= window.innerWidth) {
      this.x = 0
      this.baseY = Math.random() * 300 
    }
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
  }
}

class Barco {
  constructor() {
    this.x = 0
    this.y = 550
    this.baseY = Math.random() * 300 
    this.el = document.createElement("img")
    this.el.src = "imgs/barco.png"
    this.el.alt = "Barco"
    document.querySelector("#vagalumes").appendChild(this.el)
  }

  movimentar() {
    this.x += 1  

    if (this.x >= window.innerWidth) {
      this.x = 0 
    }
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
  }
}

let vagalumes = [new Vagalume(), new Vagalume(), new Vagalume()]
let barco = new Barco()

setInterval(() => {
  barco.movimentar()
  for (let i = 0; i < vagalumes.length; i++) {
    vagalumes[i].movimentar()
  }
}, 33)

let novoEl = document.getElementById("novo") 
novoEl.addEventListener("click", () => {
  vagalumes.push(new Vagalume())
})
