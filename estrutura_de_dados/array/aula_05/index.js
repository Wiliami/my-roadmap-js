// Veficar se um número é PAR

// const array = [1, 2, 3, 4, 5];

// const result = array.filter(item => item % 2 === 0)
// console.log(result)



const array = [1, 2, 3, 4, 5]

const result = array.filter(item => item % 2 === 0)
// console.log(result)


function sum(...numbers) {
    return numbers.reduce((a, b) => a + b) 
}
console.log(sum(10, 20))


function sum(a, b) {
    return a + b
}
