/* Escopo global e local */

/* Escopo, redeclaração e hoisting */
var nome = "Wiliamis Sampaio";

function retornaNome() {
  /* O escopo local primeiro verifica se 
    existe uma varíavel local */

  return nome;
}

function retornaNomeTeste() {
  var nome = "Wiliamis Sampaio";
  return nome;
}

console.log(retornaNome());

/* let */

/* const */
