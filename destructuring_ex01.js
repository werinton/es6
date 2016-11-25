let pessoa = {nome:'Werinton', idade: 20};

let {nome, idade} = pessoa;
console.log(nome, idade);

let {nome: n, idade: i} = pessoa;
console.log(n, i);

let {genero, situacao = "Ativo"} = pessoa;
console.log(genero, situacao);
