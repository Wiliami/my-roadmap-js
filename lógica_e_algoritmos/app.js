// const inputNumero = document.getElementById('inputNumero');
// const btnCalcular = document.getElementById('btnCalcular');
// const outTabuada = document.getElementById('outTabuada');

// function mostraTabuada() {

//     let numero = Number(inputNumero.value);
//     let tabuada = '';

//     // validar o input do usuário
//     if(inputNumero.value == '' || isNaN(numero)) {
//         alert('Digite um número positivo!');
//         inputNumero.value = '';
//         inputNumero.focus();
//         return;
//     }

//     for(let index = 1; index <= 10; index++) {
//         tabuada += `${numero} x ${index} = ${numero * index}\n`;
//     }

//     outTabuada.textContent = `${tabuada}`;
// }

// btnCalcular.addEventListener('click', mostraTabuada);



// Verificar se número PAR ou ÍMPAR
function verifYNumber(number) {
  
  if((number < 0 || number == '') || isNaN(number) {
    alert('O número precisar ser positivo.')
    return;
  } else if(number % 2 === 0) {
    console.log(`O número ${number} é PAR.`)
  } else {
    console.log(`O número ${number} é ÍMPAR.`)
  }
} 

veriyNumber(1) // ÌMPAR
veriyNumber(2) // PAR
veriyNumber(3) // ÌMPAR
veriyNumber(4) // PAR
