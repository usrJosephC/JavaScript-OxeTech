function aumentoSalarial(salario, plano) {
  switch (plano.toUpperCase()) {
    case "A":
      return salario * 1.1;
    case "B":
      return salario * 1.15;
    case "C":
      return salario * 1.2;
    default:
      return "Plano inválido";
  }
}

console.log(aumentoSalarial(1000, "B")); // 1150
