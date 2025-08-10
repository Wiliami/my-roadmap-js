const user = {
    name: 'Wiliamis',
    age: 27,
    adress: {
        street: 'Rua B',
        code: 2872727
    }
}

const { name, age } = user;
console.log(name, age)


function mostrarIdade({ age }) {
    console.log(age)
}

// mostrarIdade(user)