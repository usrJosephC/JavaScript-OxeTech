function calcularPlanoSaude(idade) {
  let adicional = 0;
  
  if (idade < 10) adicional = 80;
  else if (idade <= 30) adicional = 50;
  else if (idade <= 60) adicional = 95;
  else adicional = 130;
  
  return 100 + adicional;
}

console.log(calcularPlanoSaude(35));