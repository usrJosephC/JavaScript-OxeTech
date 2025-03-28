function listarPropriedades(objeto) {
  return Object.keys(objeto);
}

let carro = { marca: "Toyota", modelo: "Corolla", ano: 2022 };
console.log(listarPropriedades(carro)); 