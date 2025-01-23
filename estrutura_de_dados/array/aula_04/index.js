async function update(table) {}
try {} catch(err) {}

// Body : data
 const data ={
    name: 'Wiliamis', // $1
    email: 'teste@gmail.com',
    password: '123'
}

const { userId, ...fields } = data

const keys = Object.keys(fields) // array
const values = Object.values(fields) // array
const setClause = keys.map((key, index) => `"${key}" = $${index + 1}`) // name = 'novo_valor + email = 'novo_email@gmial.com'... 

console.log('Cláusula: ', setClause)
// console.log('keys: ', keys)
// console.log('Values: ', values)

// const query = `update ${table} set`

const arr = [1, 2, 3, 4, 5]
const result = arr.map((key, index) => `"${key}" = $${index}`)
// console.log(result)