const gerirTarefas = (tarefas, acao, novaTarefa) => {
  acao = acao.toLowerCase()
  if (acao === "adicionarinicio") {
    tarefas.unshift(novaTarefa)
  } else if (acao === "adicionarfim") {
    tarefas.push(novaTarefa)
  } else if (acao === "removerinicio") {
    tarefas.shift()
  } else if (acao === "removerfim") {
    tarefas.pop()
  }
  return tarefas
}

const tarefas = ["Estudar", "Treinar", "Ler"]
const tarefasAtt = gerirTarefas(tarefas, "adicionarFim", "Dormir")

console.log(tarefasAtt)