const jogador1 = Math.floor(Math.random() * 6) + 1
const jogador2 = Math.floor(Math.random() * 6) + 1

const imagensDados = document.querySelectorAll("img")

imagensDados[0].setAttribute("src", `images/dado${jogador1}.png`)
imagensDados[1].setAttribute("src", `images/dado${jogador2}.png`)

const titulo = document.querySelector("h1")

if (jogador1 > jogador2) {
  titulo.textContent = "🚩 Jogador 1 venceu!"
} else if (jogador2 > jogador1) {
  titulo.textContent = "Jogador 2 venceu! 🚩"
} else {
  titulo.textContent = "Empate!"
}