// var nome = "Wiliamis";

// function retornaNome() {
//   var nome = "Sampaio";
//   return nome;
// }

/* console.log(nome) Output: Wiliamis */

// // function retornaNome() {
//   nome = "Sampaio";
//   return nome;
// }

// retornaNome(); /* Sampaio */
// console.log(nome); /* Sampaio */



// O que são variáveis?
/* 
Escopo: local, externo e global (Visibilidade)

-- Cada função cria um escopo ---

-- Scope chain -- (Chamar variáveis)

Function Scope, Redeclaração e Hosting:
var: 
let: 
const:

*/

// var nome = "Wiliamis"

// function retornaNome() {
//   nome = "Dudu"
//   return nome;
// }

// console.log(nome)

// Juros compostos
// Comitê de Política Monetária (COPOM) orgão do banco central do Brasil

// Taxa selic: 15% a.a | 1% a.m



export default function GET() {
  const db = [
    { id: 1, name: 'Filipe Deschamps', email: 'filipe.deschamps@gmail.com' },
    { id: 2, name: 'Diego Fernandes', email: 'diego3g@gmail.com' },
    { id: 1, name: 'Kipper dev', email: 'kipper.dev@gmail.com' }
  ]
  const result = JSON.stringify({ users: db })
  console.log('-----------------------------------------------------------------')
  console.log('GET: ', result)
  console.log('-----------------------------------------------------------------')

  return result
}

// JSON to object literal JS
function fetchData() {
  // delay 1s
  // await new Promise(resolve => setTimeout(resolve, 1000))

  const response = GET() // json
  const users = JSON.parse(response) // Objeto JS

  return users
}

// Objeto literal do Javascript

async function getUsers() {
  try {
    const data = fetchData()
    console.group('GET USERS:', data)
    
    return data
  } catch (error) {
    console.error("Erro ao buscar dados: ", error)
  }

}

console.log(getUsers())



// export default function GET() {
//   return Response.json({ message: 'Hello World' })
// }

// console.logo