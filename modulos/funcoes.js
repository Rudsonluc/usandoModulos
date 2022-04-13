module.exports.calcularIdade = function (anoNasc) {
    return 2022 - anoNasc;
}

module.exports.calcularImc = function (peso, altura) {
    return (peso / altura ** 2);
}