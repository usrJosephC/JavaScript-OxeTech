function calcularCedulas(valor) {
  const cedulas = [100, 50, 10, 5, 1];
  const resultado = [];
  
  for (let cedula of cedulas) {
    if (valor >= cedula) {
      const qtd = Math.floor(valor / cedula);
      resultado.push(`${qtd} nota(s) de R$ ${cedula}`);
      valor %= cedula;
    }
  }
  
  return resultado.join('. ');
}

console.log(calcularCedulas(18));