const readline = require('readline-sync')

function calcular(num1 = 0, num2 = 0, operador = '+') {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Erro: Os dois primeiros parâmetros devem ser números"
    }

    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero"
        case '%':
            return num1 % num2
        default:
            return "Erro: Operador inválido"
    }
}

let num1 = parseFloat(readline.question("Digite o primeiro número: "))
let num2 = parseFloat(readline.question("Digite o segundo número: "))
let operador = readline.question("Digite o operador (+, -, *, /, %): ")

let resultado = calcular(num1, num2, operador)
console.log("Resultado:", resultado)