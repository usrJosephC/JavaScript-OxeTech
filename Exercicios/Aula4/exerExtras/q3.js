const alunos = [
  { nome: "Ana", notas: [8, 9, 8] },
  { nome: "Carlos", notas: [7, 6, 8] },
  { nome: "Bianca", notas: [5, 6, 7] },
  { nome: "Daniel", notas: [9, 9, 9] },
  { nome: "Eduarda", notas: [4, 5, 6] }
];

function calcularMedia(nome) {
  const aluno = alunos.find(a => a.nome === nome);
  
  if (!aluno) {
    return "Aluno não encontrado";
  }
  
  const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
  const media = soma / aluno.notas.length;
  
  return parseFloat(media.toFixed(1));
}

function alunosAprovados() {
  return alunos
    .filter(aluno => {
      const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
      const media = soma / aluno.notas.length;
      return media >= 7;
    })
    .map(aluno => aluno.nome);
}

console.log(calcularMedia("Ana"));
console.log(calcularMedia("Carlos"));
console.log(calcularMedia("Bianca"));

console.log(alunosAprovados());