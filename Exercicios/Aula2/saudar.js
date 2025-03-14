const readline = require('readline-sync')

function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
}

let nomeUsuario = readline.question("Digite seu nome: ")

let nomeFormatado = formatarNome(nomeUsuario)

console.log(`Olá, ${nomeFormatado}, seja bem-vindo(a)!`)