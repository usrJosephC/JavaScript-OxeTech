const readline = require('readline-sync'); 

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1; 
}

let jogador1 = readline.questionInt("Jogador 1, escolha um número entre 1 e 6: ")
let jogador2 = readline.questionInt("Jogador 2, escolha um número entre 1 e 6: ")

if (jogador1 < 1 || jogador1 > 6 || jogador2 < 1 || jogador2 > 6) {
    console.log("Números inválidos! Escolham números entre 1 e 6.")
} else {
    let resultadoDado = rolarDado()
    console.log(`O número sorteado foi: ${resultadoDado}`)

    let diferencaJogador1 = Math.abs(jogador1 - resultadoDado)
    let diferencaJogador2 = Math.abs(jogador2 - resultadoDado)

    if (diferencaJogador1 < diferencaJogador2) {
        console.log("Jogador 1 venceu!")
    } else if (diferencaJogador2 < diferencaJogador1) {
        console.log("Jogador 2 venceu!")
    } else {
        console.log("Empate!")
    }
}