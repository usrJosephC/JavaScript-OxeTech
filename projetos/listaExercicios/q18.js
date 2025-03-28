function conceitosNotas(notas) {
  return notas.map(nota => {
    if (nota >= 9) return 'A';
    if (nota >= 7) return 'B';
    if (nota >= 5) return 'C';
    return 'D';
  });
}

console.log(conceitosNotas([8.5, 6.3, 4.9, 9.1])); 