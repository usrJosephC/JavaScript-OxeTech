function calcularAnuidade(mes, valor) {
  if (mes === 1) return valor;
  return valor * Math.pow(1.05, mes - 1);
}

console.log(calcularAnuidade(5, 1000));