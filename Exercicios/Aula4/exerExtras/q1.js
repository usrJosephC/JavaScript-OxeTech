const hotel = Array.from({ length: 5 }, (_, i) => ({
  numero: 101 + i,
  ocupado: false,
  hospede: ''
}));

function reservarQuarto(hotel, nomeHospede) {
  const quartoLivre = hotel.find(quarto => !quarto.ocupado);
  
  if (quartoLivre) {
    quartoLivre.ocupado = true;
    quartoLivre.hospede = nomeHospede;
    return `Quarto ${quartoLivre.numero} reservado para ${nomeHospede}`;
  } else {
    return "Hotel lotado!";
  }
}

function liberarQuarto(hotel, numero) {
  const quarto = hotel.find(q => q.numero === numero);
  
  if (!quarto) {
    return "Quarto não encontrado!";
  }
  
  if (!quarto.ocupado) {
    return "Este quarto já está disponível.";
  }
  
  quarto.ocupado = false;
  quarto.hospede = '';
  return `Quarto ${numero} foi liberado.`;
}

function listarQuartos(hotel) {
  return hotel
    .filter(quarto => quarto.ocupado)
    .map(quarto => quarto.numero);
}

console.log(reservarQuarto(hotel, "João"));
console.log(reservarQuarto(hotel, "Maria"));

console.log(listarQuartos(hotel));

console.log(liberarQuarto(hotel, 101));
console.log(listarQuartos(hotel));

console.log(reservarQuarto(hotel, "Carlos"));
console.log(listarQuartos(hotel));