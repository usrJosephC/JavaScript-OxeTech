const calcularMedia = (notas) => {
  let soma = 0
  notas.forEach((nota) => {
    soma += nota
  })
  return soma / notas.length
}

const acimaMedia = (notas, media) => {
  let contador = 0
  notas.forEach((nota) => {
    if (nota > media) {
      contador++
    }
  })
  return contador
}

const notas = [6, 8, 9, 5]
const media = calcularMedia(notas)
const aprovados = acimaMedia(notas, media)

console.log(media) 
console.log(aprovados)