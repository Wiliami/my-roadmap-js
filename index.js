import ContaBancaria from './classes/ContaBancaria.js';

const minhaConta = new ContaBancaria();
const result = minhaConta.obterSaldo();

console.log(result);