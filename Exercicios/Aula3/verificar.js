const readline = require('readline-sync')

function ehPrimo(num) {
    if (typeof num !== 'number' || num <= 1 || !Number.isInteger(num)) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

let numero = parseInt(readline.question("Digite um número inteiro positivo: "))
let resultado = ehPrimo(numero)
console.log(`O número ${numero} é primo?`, resultado)