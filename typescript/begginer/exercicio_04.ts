interface User {
    name: string
    age: number
}

function saveUserToDatabase(user: User) {
    // salvar no banco de dados

    console.log(user)
}

saveUserToDatabase({
    name: 'Wiliamis',
    age: 27
})