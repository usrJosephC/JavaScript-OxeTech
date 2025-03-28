function filtrarEmEstoque(produtos) {
  return produtos.filter(produto => produto.emEstoque);
}

const produtos = [
  { nome: 'Camiseta', preco: 50, emEstoque: true },
  { nome: 'Calça', preco: 80, emEstoque: false },
  { nome: 'Tênis', preco: 120, emEstoque: true }
];
console.log(filtrarEmEstoque(produtos));