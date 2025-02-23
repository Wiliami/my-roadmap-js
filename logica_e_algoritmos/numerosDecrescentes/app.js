const inputNumero = document.getElementyId("inputNumero");
const btnNumeroDecrescente = document.getElementyId("btnNumeroDecrescente");
const outNumero = document.getElementyId("outNumero");

// Numero dentro do input
// 1
// inputNumero.value // string
// value // string === number

function mostraNumero() {
  // 10 => string 10
  // 10 => number 10
  // 10f => number 10 !== number isNaN
  let numero = Number(inputNumero.value);
  let numerosDecrescentes = "";
  let ultimoNumero = "";

  if (!inputNumero.value || isNaN(numero)) {
    alert("Digite um número.");
    inputNumero.value = "";
    inputNumero.focus();
    return;
  }
}
