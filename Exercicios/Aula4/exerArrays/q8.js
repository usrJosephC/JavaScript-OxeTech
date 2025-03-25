const filtrarDevedores = (dividas) => {
  return dividas.filter((divida) => divida > 80)
}

let dividas = [95.90, 100.50, 22.99, 105.99, 30.50]
let devedores = filtrarDevedores(dividas)

console.log(devedores)