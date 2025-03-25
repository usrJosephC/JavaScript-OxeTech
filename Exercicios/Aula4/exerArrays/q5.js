const maior = (numeros) => {
  let maiorNumero = numeros[0]

  for (const numero of numeros) {
    if (numero > maiorNumero) {
      maiorNumero = numero
    }
  }

  return maiorNumero
}

const menor = (numeros) => {
  let menorNumero = numeros[0]

  for (const numero of numeros) {
    if (numero < menorNumero) {
      menorNumero = numero
    }
  }

  return menorNumero
}

const numeros = [-1, 3, 8, -2, 4, 10]
console.log(maior(numeros))
console.log(menor(numeros))