const cardBoard = document.getElementById('cardboard')

const uno_cards = [
  "uno_b_0.png", "uno_b_1.png", "uno_b_2.png", "uno_b_3.png",
  "uno_b_4.png", "uno_b_5.png", "uno_b_6.png", "uno_b_7.png", "uno_b_8.png",
  "uno_b_9.png", "uno_b_block.png", "uno_b_mais2.png", "uno_b_vaivem.png",
  "uno_r_1.png", "uno_r_2.png", "uno_r_3.png", "uno_r_0.png", "uno_r_4.png",
  "uno_r_5.png", "uno_r_6.png", "uno_r_7.png", "uno_r_8.png", "uno_r_9.png",
  "uno_r_block.png", "uno_r_mais2.png", "uno_r_vaivem.png", "uno_y_0.png",
  "uno_y_1.png", "uno_y_2.png", "uno_y_3.png", "uno_y_4.png", "uno_y_5.png",
  "uno_y_6.png", "uno_y_7.png", "uno_y_8.png", "uno_y_9.png", "uno_y_block.png",
  "uno_y_mais2.png", "uno_y_vaivem.png", "uno_g_0.png", "uno_g_1.png",
  "uno_g_2.png", "uno_g_3.png", "uno_g_4.png", "uno_g_5.png", "uno_g_6.png",
  "uno_g_7.png", "uno_g_8.png", "uno_g_9.png", "uno_g_block.png", 
  "uno_g_mais2.png", "uno_g_vaivem.png", "uno_z_coringa.png", "uno_z_mais_4.png"
]
const capa = "uno_z_capa.png"
let cardHTML = ''

uno_cards.forEach(card => {
  cardHTML += `
    <div class="memory-card">
      <img class="front-face" src="img/${card}">
      <img class="back-face" src="img/${capa}">
    </div>
  `
})

cardBoard.innerHTML = cardHTML + cardHTML




