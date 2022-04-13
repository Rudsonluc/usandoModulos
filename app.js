const { calcularIdade, calcularImc } = require('./modulos/funcoes.js');

// Pega a 3ª entrada de uma lista de argumentos
const idade = process.argv[2];
const inputIdade = calcularIdade(idade);

const peso = process.argv[3];
const altura = process.argv[4];
const inputImc = calcularImc(peso, altura);

console.log(`Você tem ${inputIdade} anos e seu imc é de ${inputImc}`);