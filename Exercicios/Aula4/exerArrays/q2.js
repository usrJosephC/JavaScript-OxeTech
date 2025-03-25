const calcularMedia = (notas) => {
  const notasOrdenas = notas.sort((a, b) => b - a)
  const tresMelhoresNotas = notasOrdenas.slice(0, 3)
  const soma = tresMelhoresNotas.reduce((acc, nota) => acc + nota, 0)
  console.log(tresMelhoresNotas)
  const media = soma / tresMelhoresNotas.length
  return media  
}

const notas = [5, 8, 9, 3, 10, 7]
const media = calcularMedia(notas)

console.log(media)