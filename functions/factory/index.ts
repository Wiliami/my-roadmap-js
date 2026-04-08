class User {
    #counter = 0;
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    incrementCounter() {
        return ++this.#counter
    }
}


const createUser = (name: string, email: string) => {
    let counter = 0;

    return {
        name,
        email,
        incrementCounter: () => ++counter
    }
}


const user = new User('Wiliamis', 'wiliamis@gmail.com');
const user2 = createUser('Wiliamis', 'wiliamis@gmail.com');
const user3 = createUser('Wiliamis 2', 'wiliamis2@gmail.com');

console.log(user, user2);
console.log(user.incrementCounter());
console.log(user.incrementCounter());
console.log(user2.incrementCounter());
console.log(user2.incrementCounter());
console.log(user3.incrementCounter());
console.log(user3.incrementCounter());




/* 
    Factory: 
     - não é classe ❌
     - não é construtor ❌ 
     - não é função construtora ❌
 */