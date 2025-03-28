function classificarTriangulo(a, b, c) {
  if (a === b && b === c) return "Equilátero";
  if (a === b || a === c || b === c) return "Isósceles";
  return "Escaleno";
}

console.log(classificarTriangulo(2, 2, 2));