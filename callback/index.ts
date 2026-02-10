function saudacao(name: string, callback: () => string) {
    console.log(`Olá, ${name}`)
    callback()
}


function despedida(): string {
    // return: string, boolean, number, undefined, void, function

    return 'Tchau!'
}


console.log(saudacao('Wiliamis', despedida));


// Hoisting
// Function declaration 
// function soma(a, b) {
//     return a + b
// }

// Eleva a declaração pro topo do código : Return undefined

// soma() // Function expression: Fica do lado da expressão
// const soma = function(a: number, b: number) {
//     return a + b
// }


// console.log(soma(1, 1))

// Scope local e global: Scope chain
// NameSpace
// Var: Scope function, redeclaração, hosting 
// let: reatribuída e hosting (chamar na ordem correta)
// const: hoisting (chamar na ordem correta)

// Declaração: variável, function, classe
// Expressão: let result = 1 + 1 
// Instrução: if, for, forEach, map

// function soma () {}
// var soma = function() {}
// () => {}

(function() {
    console.log('Oi')
})()