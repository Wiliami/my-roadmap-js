// function identity(arg: number): number {
//     return arg
// }

// function identity(arg: any): any {
//     return arg
// }

function identity<Type>(arg: Type): Type {
    return arg
}

// console.log(identity({
//     name: 'Wiliamis',
//     age: 27,
// }))


console.log(identity(22))


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Wiliamis',
            age: 27
        })
    }, 3000)
})


async function executePromise() {
    try {
        const response = await myPromise   

        return response

    } catch (err) {
        return new Error('Deu ruim', err)
    }
}



console.log(executePromise())