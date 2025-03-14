function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function gerarDigitosCPF() {
  let cpf = ''
  for (let i = 0; i < 9; i++) {
      cpf += gerarNumeroAleatorio(0, 9).toString()
  }
  return cpf
}

function calcularDigitoVerificador(cpf, posicao) {
  let soma = 0
  for (let i = 0; i < posicao; i++) {
      soma += parseInt(cpf[i]) * (posicao + 1 - i)
  }
  const resto = soma % 11
  return resto < 2 ? 0 : 11 - resto
}

function formatarCPF(cpf) {
  return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`
}

function gerarCPF() {
  let cpf = gerarDigitosCPF()

  const digito1 = calcularDigitoVerificador(cpf, 9)
  cpf += digito1

  const digito2 = calcularDigitoVerificador(cpf, 10)
  cpf += digito2

  return formatarCPF(cpf)
}

console.log("CPF gerado:", gerarCPF())