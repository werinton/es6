var nome = 'Bia', dataNascimento = 1988;

function idade() {
  return new Date().getFullYear() - dataNascimento;
}

var pessoa = {
  nome,
  idade,
  dataNascimento,
  toString: function() { return `${nome} = ${idade()}`; }
}

console.log(pessoa.toString());
