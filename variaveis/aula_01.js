/* 1.Declaração 2. Redeclaração 3.Hoisting */

/* Scope */
// 1. Local
// 2. Global

/* Cada função cria o seu próprio escopo */

/* Var - declaração */
var nome = 'Wiliamis';
// Output: Wiliamis


/* Var - redeclaração */
var nome = 'Sampaio';

/* Var - Hoisting */
function retornaNome() {
    nome = 'Wiliamis';
    return nome; 
}

retornaNome();
console.log(nome);