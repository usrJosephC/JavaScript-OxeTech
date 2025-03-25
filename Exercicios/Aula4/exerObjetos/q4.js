function definirSenha(usuario, senha) {
  Object.defineProperty(usuario, 'senha', {
      value: senha,
      enumerable: false,
      writable: false,
      configurable: false
  });
}

let usuario = { nome: "Carlos" };
definirSenha(usuario, "12345");

console.log(usuario.senha);

usuario.senha = "novaSenha";
console.log(usuario.senha);

console.log(Object.keys(usuario));