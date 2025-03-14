const readline = require('readline-sync')

function sorteio(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
        return "Erro: Intervalo inválido"
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
}

const min = parseInt(readline.question("Digite o valor mínimo do intervalo: "))
const max = parseInt(readline.question("Digite o valor máximo do intervalo: "))

const resultado = sorteio(min, max)
console.log("Número sorteado:", resultado)