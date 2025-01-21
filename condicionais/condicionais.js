// console.log('Antes do if');

// if(true) {
//     console.log('Testando o if');
// }

// console.log('Depois do if');



// Condicionais
// var operador1 = 1;
// var operador2 = 1;
// var result = 2;

// if(operador1 + operador2 == result) {
//     console.log('Testando o if');
// } else {
//     console.log(operador1 + ' + ' + operador2, 'não é igual a:', result);
// }


// Testando a condição
// if(true) {
//     console.log('Testando o if');
// }

// Testando o if com uma condição
// if(1 + 1 == 2) {
//     console.log('Testando o if');
// }



// let dayOfWeek = undefined

// if(day === 'domingo') {
//     dayOfWeek = 1;
// } else if(day === 'segunda-feira') {
//     dayOfWeek = 2;
// } else if(day === 'terça-feira') {
//     dayOfWeek = 3;
// } else if(day === 'quarta-feira') {
//     dayOfWeek = 4;
// } else if(day === 'quinta-feira') {
//     dayOfWeek = 5;
// } else if(day === 'sexta-feira') {
//     dayOfWeek = 6;
// } else if(day === 'sábado') {
//     dayOfWeek = 7;
// } else {
//     dayOfWeek = 'Dia inválido';
// }

// console.log(dayOfWeek)

const day = 'segunda-feira'

const dayObject = {
    'domingo': 1,
    'segunda-feira': 2,
    'terça-feira': 3,
    'quarta-feira': 4,
    'quinta-feira ': 5, 
    'sexta-feira': 6,
    'sábado': 7
}

let dayOfWeek = dayObject['quinta-feira'] || -1;

console.log(dayOfWeek)


