function calcularLanche(codigo, quantidade) {
  switch (codigo) {
    case 100: return quantidade * 3.00;
    case 200: return quantidade * 4.00;
    case 300: return quantidade * 5.50;
    case 400: return quantidade * 7.50;
    case 500: return quantidade * 3.50;
    case 600: return quantidade * 2.80;
    default: return "Produto não existente";
  }
}

console.log(calcularLanche(300, 2));