let estoque = [
  { nome: "Arroz", preco: 10.50, quantidade: 15 },
  { nome: "Feijão", preco: 8.75, quantidade: 2 },
  { nome: "Óleo", preco: 7.20, quantidade: 1 },
  { nome: "Açúcar", preco: 4.30, quantidade: 10 },
  { nome: "Café", preco: 12.60, quantidade: 5 }
];

function venderProduto(nome, qtd) {
  const produto = estoque.find(p => p.nome === nome);
  
  if (!produto) {
    return "Produto não encontrado no estoque.";
  }
  
  if (produto.quantidade < qtd) {
    return "Estoque insuficiente para este produto.";
  }
  
  produto.quantidade -= qtd;
  return `Venda realizada: ${qtd} unidades de ${nome}.`;
}

function adicionarProduto(nome, preco, qtd) {
  const produtoExistente = estoque.find(p => p.nome === nome);
  
  if (produtoExistente) {
    produtoExistente.quantidade += qtd;
    return `Quantidade do produto ${nome} atualizada.`;
  }
  
  estoque.push({ nome, preco, quantidade: qtd });
  return `Novo produto ${nome} adicionado ao estoque.`;
}

function estoqueBaixo() {
  return estoque
    .filter(produto => produto.quantidade < 3)
    .map(produto => produto.nome);
}

console.log(venderProduto("Arroz", 2));
console.log(venderProduto("Feijão", 5));

console.log(estoqueBaixo());

console.log(adicionarProduto("Feijão", 8.75, 10)); 
console.log(adicionarProduto("Sal", 2.50, 20));
console.log(estoqueBaixo())