let pessoa = {
    nome: 'Werinton',
    idade: 20,
    endereco: {
        rua: 'A',
        numero: 127
    }
};

let {endereco: {rua, numero, cep}} = pessoa;

console.log(rua, numero, cep);

//let { conta: {agencia, numero}} = pessoa;
//console.log(agencia, numero);
