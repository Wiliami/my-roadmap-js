/* 1.Declaração 2. Redeclaração 3.Hoisting */

/* Escopo */
// 1. Local
// 2. Global


/* ------------------------------*/
/* Cada função cria o seu próprio escopo */
function retornaNome() {
    var nome = 'Wiliamis';
    return nome;
}

retornaNome(); // Wiliamis
// console.log(nome) // nome is not defined;





/* ------------------------------*/
// /* Var - Redeclaração */
// var nome = 'Sampaio';
// var nome = 'Pontes';
// Sempre a última declaração será usada





/* ------------------------------*/
// /* Var - Hoisting */
// function retornaNome() {
//     nome = 'Wiliamis';
//     return nome; 
// }

// retornaNome();
// console.log(nome);