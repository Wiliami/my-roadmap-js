// 01. Crie uma função que recebe um array de 2 números e 
// coloque eles em ordem crescente. 
// Não use o método sort.



function orderByAsc([n1, n2]) {
    const applyOrder = [n1, n2].reduce((n1, n2)  => {
        return numbers < n2 ? [n1, n2] : [n2, n1]
    })

    return applyOrder;
}

// 1, 2, 3, 4 ...


// console.log(orderByAsc([6, 3, 4, 9]))



function sum(...numbers) {
    const resultSumNumbers = numbers.reduce((a, b) => {
        return a + b
    })

    return resultSumNumbers;
}

console.log(sum(1, 2, 3, 4))