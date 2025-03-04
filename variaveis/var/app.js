/* Escopo global e local 
 - DEFINIÇÃO: O escopo determina o acesso/visibilidade de uma variável 
*/

/* Escopo, redeclaração e hoisting */

/* VAR - VAMOS COMEÇAR ⚡ */
var nome = "Wiliamis Sampaio";
/* Mesmo escopo, no caso escopo global */
console.log(nome);

/* Scope chain, function  scope */
function retornaNome() {
  /* Verifica se existe uma varíavel local,
  se não tiver ele procura no escopo acima */
  return nome;
}

function retornaNomeTeste() {
  /* A variável declarada dentro
    de uma função não é visível fora dela 
    */

  var nome = "Wiliamis Sampaio";

  return nome;
}

console.log(retornaNome());
