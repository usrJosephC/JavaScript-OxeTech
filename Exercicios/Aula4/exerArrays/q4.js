const somarNumeros = (numeros) => {
  let soma = 0

  for (let index in numeros) {
    const numero = numeros[index]
    if (numero % 2 === 0 && numero % 3 === 0) {
      soma += numero
    }
  }
  return soma
}

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1]
const resultado = somarNumeros(numeros)

console.log(resultado)