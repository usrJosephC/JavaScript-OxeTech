function removerPropriedade(objeto, propriedade) {
  const copia = { ...objeto };
  delete copia[propriedade];
  return copia;
}

const pessoa = { nome: 'Ana', idade: 25 };
console.log(removerPropriedade(pessoa, 'idade'));