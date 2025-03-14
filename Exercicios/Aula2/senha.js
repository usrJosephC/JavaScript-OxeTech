const readline = require('readline-sync')

function gerarSenhaSegura(palavra) {
    let senha = palavra.trim()

    senha = senha.replace(/a/gi, '@')
    senha = senha.replace(/i/gi, '1') 
    senha = senha.replace(/o/gi, '0') 

    return senha
}

let palavraUsuario = readline.question("Digite uma palavra para transformar em senha segura: ")

let senhaSegura = gerarSenhaSegura(palavraUsuario)

console.log(`Sua senha segura é: ${senhaSegura}`)