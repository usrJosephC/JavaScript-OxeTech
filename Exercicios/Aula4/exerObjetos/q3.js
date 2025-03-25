function objetoParaMatriz(objeto) {
  return Object.entries(objeto);
}

let produto = { nome: "Notebook", preco: 3000, estoque: 10 };
console.log(objetoParaMatriz(produto));