type User = {
    name: string
    age: number
}

function isAdult(user: User): boolean {
    return user.age >= 18;
}

const justine = { name: 'Justine', age: 23 }

const isJustineIsAnAdult = isAdult(justine)
// console.log(isJustineIsAnAdult)


function showUserScreen(user: string): string {
    return `Hello, ${user}`
}

console.log(showUserScreen('Wiliamis'))


// function greeter(person: string) {
//     return "Hello " + person
// }

// let user = [1, 2, 4]
// console.log(greeter(user))