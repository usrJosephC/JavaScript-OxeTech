function inverterObjeto(objeto) {
  return Object.fromEntries(Object.entries(objeto).map(([chave, valor]) => [valor, chave]));
}

console.log(inverterObjeto({ a: 1, b: 2 }));