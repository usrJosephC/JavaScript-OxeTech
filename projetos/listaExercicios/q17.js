function contarIntervalo(numeros) {
  let dentro = 0, fora = 0;
  
  for (let num of numeros) {
    if (num >= 10 && num <= 20) dentro++;
    else fora++;
  }
  
  return { dentro, fora };
}

console.log(contarIntervalo([5, 10, 15, 20, 25]));