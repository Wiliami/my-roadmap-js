class UserAccount {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age
    }
}


// const user: User = new UserAccount('Wiliamis', 27)
// console.log(user)

function deleteAccountUser(user: User) {
    console.log(user)
}

deleteAccountUser({
    name: "Wiliamis",
    age: 27
})

function getAdminUser(user: User) {
    console.log(user)
}

getAdminUser({
    name: 'Humberto Santos de Oliveira',
    age: 39
})