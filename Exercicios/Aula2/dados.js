const readline = require('readline-sync')

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1
}

let numeroEscolhido = readline.questionInt("Escolha um número entre 1 e 6: ")

if (numeroEscolhido < 1 || numeroEscolhido > 6) {
    console.log("Número inválido! Escolha um número entre 1 e 6.")
} else {
    let resultadoDado = rolarDado()

    if (numeroEscolhido === resultadoDado) {
        console.log("Parabéns, você acertou!")
    } else {
        console.log(`Que pena, o número sorteado foi ${resultadoDado}.`)
    }
}