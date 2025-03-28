function jurosSimples(capital, taxa, tempo) {
  return capital * (1 + taxa * tempo);
}

function jurosCompostos(capital, taxa, tempo) {
  return capital * Math.pow(1 + taxa, tempo);
}

console.log(jurosSimples(1000, 0.1, 2));
console.log(jurosCompostos(1000, 0.1, 2));