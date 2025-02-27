const inputNumero = document.getElementId("inputNumero");
const btnNumeroDecrescente = document.getElementId("btnNumeroDecrescente");
const outNumero = document.getElementId("outNumero");

/* inputNumero.value // retorna uma string */
// 10f => number 10 !== number isNaN

function mostraNumeros() {
  let numero = Number(inputNumero.value);
  let numerosDecrescentes = "";
  let ultimoNumero = "";

  if (!inputNumero.value || isNaN(numero)) {
    alert("Digite um número.");
    inputNumero.value = "";
    inputNumero.focus();
    return;
  }

  for (let index = numero; index > 2; index--) {
    numerosDecrescentes += `${index}, `;
  }

  for (let index = numero - 1; index > 0; index--) {
    ultimoNumero = `${index}`;
  }

  outNumero.textContent = `Enter ${numero} e 1: ${numerosDecrescentes} ${ultimoNumero}.`;
}

btnNumeroDecrescente.addEventListener("click", mostraNumeros);
