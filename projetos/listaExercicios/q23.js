function paresIndicesPares(numeros) {
  return numeros.filter((num, index) => num % 2 === 0 && index % 2 === 0);
}

console.log(paresIndicesPares([10, 11, 12, 13, 14, 15]));