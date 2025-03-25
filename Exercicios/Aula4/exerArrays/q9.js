const calcularTotal = (vendas) => {
  return vendas.reduce((acc, venda) => acc + venda, 0)
}

let vendas = [150, 200, 100, 50]
let total = calcularTotal(vendas)
console.log(total)
