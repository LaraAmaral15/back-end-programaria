const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
  {
    nome: 'Lara Amaral',
    imagem: 'https://avatars.githubusercontent.com/u/90003183?v=4',
    minibio: 'Estudante de front-end'
  }, 
  {
    nome: 'Iana Chan',
    imagem: 'https://www.nexojornal.com.br/incoming/imagens/Favoritos-Iana-Chan/alternates/SQUARE_640/Favoritos%20-%20Iana%20Chan',
    minibio: 'Fundadora da Programaria'
  },
  {
    nome: 'Nina da Hora',
    imagem: 'https://s2.glbimg.com/2N6r_0QWp5J3IUY9LRrGn3wVtmA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/L/p/8CkEH5SVKP6HbKP1MxZg/imgs-site-3726.jpg',
    minibio: 'Hacker atirracista'
  }
]

function mostraMulheres(request, response) {
response.json(mulheres)
}

function mostraPorta() {
  console.log('Servidor criado e rodando na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)