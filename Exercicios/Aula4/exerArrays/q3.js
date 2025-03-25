const gerirListas = (lista1, lista2, acao, quantidade) => {
  let listaResultado = lista1.concat(lista2)
  acao = acao.toLowerCase()

  if (acao === "removerultimos") {
    listaResultado.splice(-quantidade)
  }
  return listaResultado
}

const lista1 = ["Maçã", "Banana"]
const lista2 = ["Uva", "Laranja", "Pera"]

const listaFinal = gerirListas(lista1, lista2, "juntar")
console.log(listaFinal)

const listaFinal2 = gerirListas(lista1, lista2, "removerultimos", 2)
console.log(listaFinal2)