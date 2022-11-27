const fs = require('fs')
const nome_arquivo = '/carta.txt'
const path = __dirname + `${nome_arquivo}`

const text_simple = 'Sou residente nesta cidade há muito tempo e estou escrevendo para manifestar meu apoio total à decisão pendente de remover as árvores ao longo do corredor da rua principal.'

function leitor_de_arquivo(path) {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      console.log(`Erro de leitura: ${error.message}`)
    } else {
      console.log(data)
    }
  })
}

function escritor_arquivo(path, text) {
  fs.writeFile(path, text, (error, data) => {
    if (error) {
      console.error(`Erro de escrita: ${error.message}`)
    } else {
      console.log(data)
    }
  })
}

escritor_arquivo(path, text_simple)

leitor_de_arquivo(path)