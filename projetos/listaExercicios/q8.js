function ehBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é bissexto`);
    return true;
  }
  console.log(`${ano} não é bissexto`);
  return false;
}

console.log(ehBissexto(2020));