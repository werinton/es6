let preco = 40.99;
let parcela = 15;

function real(strings, ...values) {

    console.log(strings);
    console.log(values);

    const resultado = [];
    values.forEach(function(value, index) {
        value = (typeof value == 'number') ? `R$${value.toFixed(2)}` : value;
        resultado.push(strings[index], value);
    });
    return resultado.join('');
}

console.log(real `1x de ${preco} ou 3x de ${parcela}`)
