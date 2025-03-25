const comentarios = [
  { usuario: "Ana", texto: "Adorei aprender JavaScript hoje!", likes: 25 },
  { usuario: "Carlos", texto: "O framework React é incrível", likes: 50 },
  { usuario: "Bianca", texto: "Alguém pode me ajudar com CSS?", likes: 15 },
  { usuario: "Daniel", texto: "JavaScript é a linguagem mais versátil", likes: 40 },
  { usuario: "Eduarda", texto: "Estou adorando este curso de programação", likes: 35 },
  { usuario: "Fernando", texto: "Quando teremos mais aulas de JavaScript?", likes: 30 }
];

function topComentarios() {
  return [...comentarios]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);
}

function buscarComentario(palavra) {
  const termo = palavra.toLowerCase();
  return comentarios.filter(comentario => 
    comentario.texto.toLowerCase().includes(termo)
  );
}

function adicionarComentario(usuario, texto) {
  comentarios.push({
    usuario,
    texto,
    likes: 0 
  });
  return `Comentário de ${usuario} adicionado!`;
}

function curtirComentario(usuario) {
  const comentario = comentarios.find(c => c.usuario === usuario);
  if (comentario) {
    comentario.likes++;
    return `Comentário de ${usuario} curtido! Total: ${comentario.likes}`;
  }
  return "Usuário não encontrado";
}

function estatisticas() {
  const total = comentarios.length;
  const totalLikes = comentarios.reduce((sum, c) => sum + c.likes, 0);
  const mediaLikes = totalLikes / total;
  
  return {
    totalComentarios: total,
    totalCurtidas: totalLikes,
    mediaCurtidas: parseFloat(mediaLikes.toFixed(1)),
    comentarioMaisCurtido: topComentarios()[0]
  };
}

console.log(adicionarComentario("Gabriela", "Aprendendo sobre Node.js"));
console.log(curtirComentario("Gabriela"));
console.log(curtirComentario("Carlos"));

console.log(estatisticas());

console.log("Top 3 comentários:");
console.log(topComentarios());

console.log("\nComentários sobre JavaScript:");
console.log(buscarComentario("JavaScript"));