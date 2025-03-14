function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function sortearOperacao() {
  const operacoes = ['+', '-', '*', '/', '%']
  return operacoes[Math.floor(Math.random() * operacoes.length)]
}

function calcular(num1, num2, operacao) {
  switch (operacao) {
      case '+':
          return `${num1} + ${num2} = ${num1 + num2}`
      case '-':
          return `${num1} - ${num2} = ${num1 - num2}`
      case '*':
          return `${num1} * ${num2} = ${num1 * num2}`
      case '/':
          if (num2 === 0) return "Error: divisão por zero"
          return `${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`
      case '%':
          if (num2 === 0) return "Error: divisão por zero"
          return `${num1} % ${num2} = ${(num1 % num2).toFixed(2)}`
      default:
          return "Operação inválida"
  }
}

function executarCalculadora() {
  setInterval(() => {
      const num1 = gerarNumeroAleatorio(0, 99)
      const num2 = gerarNumeroAleatorio(0, 99)
      const operacao = sortearOperacao()

      const resultado = calcular(num1, num2, operacao)
      console.log(resultado)
  }, 2000)
}

executarCalculadora()