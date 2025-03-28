function avaliarPontuacoes(pontuacoes) {
  const scores = pontuacoes.split(' ').map(Number);
  let recordes = 0;
  let piorJogo = 0;
  let maior = scores[0];
  let menor = scores[0];
  
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maior) {
      maior = scores[i];
      recordes++;
    }
    if (scores[i] < menor) {
      menor = scores[i];
      piorJogo = i;
    }
  }
  
  return [recordes, piorJogo + 1];
}

console.log(avaliarPontuacoes("10 20 20 8 25 3 0 30 1"));