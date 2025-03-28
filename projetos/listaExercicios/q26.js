function contarPalavras(texto) {
  return texto.split(' ').filter(palavra => palavra !== '').length;
}

console.log(contarPalavras('JavaScript é incrível'));