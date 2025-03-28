function verificarSorteio(numero) {
  const sorteado = Math.floor(Math.random() * 10) + 1;
  return numero === sorteado 
    ? `Parabéns! O número sorteado foi ${sorteado}`
    : `Que pena! O número sorteado foi ${sorteado}`;
}

console.log(verificarSorteio(5));