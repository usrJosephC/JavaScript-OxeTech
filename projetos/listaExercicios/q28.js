function melhorEstudante(estudantes) {
  const medias = Object.entries(estudantes).map(([nome, notas]) => {
    const media = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
    return { nome, media };
  });
  
  return medias.reduce((melhor, atual) => atual.media > melhor.media ? atual : melhor);
}

const alunos = {
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9]
};
console.log(melhorEstudante(alunos));