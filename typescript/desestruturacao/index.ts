type User = { name: string, age: number, adress: object }

const user = {
    name: 'Wiliamis',
    age: 27,
    adress: {
        street: 'rua b',
        code: 2839340
    }
}

async function promise({ name, age  }: User) {
    console.log(`Olá, meu nome é ${name} e tenho ${age} anos de idade.`)
}


promise(user)