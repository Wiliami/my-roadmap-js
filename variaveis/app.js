var nome = "Wiliamis";

function retornaNome() {
  var nome = "Sampaio";
  return nome;
}

/* console.log(nome) Output: Wiliamis */

function retornaNome() {
  nome = "Sampaio";
  return nome;
}

retornaNome(); /* Sampaio */
console.log(nome); /* Sampaio */
