const converterMoeda = (precosDolares) => {
  return precosDolares.map((preco) => preco * 5)
}

let precosDolares = [10, 20, 30]
let precosReais = converterMoeda(precosDolares)

console.log(precosReais)