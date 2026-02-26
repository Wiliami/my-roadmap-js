interface IUser {
    name: string
    age: number
}

function createUser(name: string, age: number): void {
    console.log(name)
    console.log(age)
}
createUser('Teste', 10)

function createUserInDatabase(user: IUser): void {
    console.log(user)
}

createUserInDatabase({
    name: 'Wiliamis',
    age: 28
})



// Banco de dados
// varchar name 
// number age