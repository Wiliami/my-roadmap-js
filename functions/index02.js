// function soma(numbers) {
//     var total = 0;

//     for(var num of numbers) {
//         total = total + num
//     }

//     return total
// }


var arrayNumbers = [ 1, 2, 3, 4, 5, 6 ];
// var result = soma(arrayNumbers)
// console.log(result)


// function writeAdrress(street, city, country, ...rest) {
//     return {
//         street,
//         city,
//         country,
//         rest
//     }
// }


// console.log(writeAdrress('Rua Teste', 'Manaus', 'Brasil', 69058260, 'Residencial Tambaú', 'Avenida Cidade Nova'));


// função de biblioteca
// function soma(a, b) {
//     const result = a + b

//     console.log(`A soma de ${a} + ${b} é: ${result}`)
// }
// soma(5, 5);


// // Minha função
// (function soma(a, b) {
//     const result = a + b
    
//     console.log(`A soma de ${a} + ${b} é: ${result}`)
// }(1, 1))



function sumCallBack(a, b, fnCallback) {
    return fnCallback(a + b);
}


var multiplica = function(result) {
    return result * 2
}

console.log(sumCallBack(5, 5, multiplica))
console.log(sumCallBack(2, 2, function(result) {
    return result + 2;
}))

console.log(sumCallBack(20, 40, function(result) {
    return result / 2;
}))

function escrevaNome(nome = 'Wiliamis', idade) {
    console.log(nome)
    console.log(idade)
}

escrevaNome('Dudu')

// Aula 1 de 2 - Programador a bordo: https://www.youtube.com/@ProgramadorABordo/videos