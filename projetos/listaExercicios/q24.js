function totalDespesas(produtos) {
  return produtos.reduce((total, produto) => total + produto.preco, 0);
}

const despesas = [
  { nome: 'Aluguel', categoria: 'Moradia', preco: 1200 },
  { nome: 'Supermercado', categoria: 'Alimentação', preco: 350 }
];
console.log(totalDespesas(despesas));