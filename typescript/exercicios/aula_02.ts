/* O uso de interface 
é indicado quando se trabalha com a criação de objetos
 */
interface User {
    name: string
    age: number
}

class saveUserToDatabase {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age
    }
}


function createUser() {
    const user: User = new saveUserToDatabase('Wiliamis', 27)
    console.log(user)
}

createUser()


function deleteAccountUser(user: User) {
    // console.log(user)
}

function getAdminUser(user: User) {
    // console.log(user)
}


deleteAccountUser({
    name: "Wiliamis",
    age: 27
})

getAdminUser({
    name: 'Humberto Santos de Oliveira',
    age: 39
})