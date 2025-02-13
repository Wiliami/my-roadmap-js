// Verificar se número PAR ou ÍMPAR
function verifyNumber(number) {
  if((number < 0 || number == '') || isNaN(number)) {
    alert('O número precisar ser positivo.')
    return;
  } else if(number % 2 !== 0) {
    console.log(`O número ${number} é ÍMPAR.`)
  } else {
    console.log(`O número ${number} é PAR.`)
  }
} 

verifyNumber(1) // ÌMPAR
verifyNumber(2) // PAR
verifyNumber(3) // ÌMPAR
verifyNumber(4) // PAR