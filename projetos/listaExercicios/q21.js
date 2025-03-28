function filtrarNumeros(array) {
  return array.filter(item => typeof item === 'number');
}

console.log(filtrarNumeros(['a', 1, '2', 3, true]));