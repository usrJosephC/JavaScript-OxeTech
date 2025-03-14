const readline = require('readline-sync')

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1
}

let numeroAleatorio = gerarNumeroAleatorio()
let tentativas = 0
let palpite

console.log("Bem-vindo ao Jogo de Adivinhação!")
console.log("Tente adivinhar o número entre 1 e 100.")

while (true) {
    palpite = readline.questionInt("Digite seu palpite: ")
    tentativas++

    if (palpite < 1 || palpite > 100) {
        console.log("Por favor, digite um número entre 1 e 100.")
        continue
    }

   if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`)
        break
    } else if (palpite < numeroAleatorio) {
        console.log(`O número é maior que ${palpite}.`)
    } else {
        console.log(`O número é menor que ${palpite}.`)
    }
}