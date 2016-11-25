let aluno = 'Werinton';
let status = 'Aprovado';

console.log(`${aluno} está ${status}`);

function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return 'valor diferente';
}

console.log(tag `${aluno} está ${status}`);
