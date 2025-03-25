function listarValores(objeto) {
  return Object.values(objeto);
}

let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
console.log(listarValores(pessoa));