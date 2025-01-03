const users = [
    { name: 'Teste', emai: 'teste@gmail.com', password: '124' },
    { name: 'Kipper dev', emai: 'kipper.dev@gmail.com', password: '124' },
    { name: 'Mário Souto', emai: 'dev.soutinho@gmail.com', password: '124' },
]

for(user of users) {
    console.log(user)
}
console.log(user)

for(user of users) {
    console.log(user.name[0])
}


for(user of users) {
    console.log(typeof user)
}

for(user of users) {
    if(user.name === 'Teste') {
        return user
    }
}

for(user of users) {
    if(user.name === 'Teste') {
        console.log(user)
    }
}

users.push(
    { name: 'Messi', emai: 'the.best@gmail.com', password: '123' }
)
4
console.log(users)

for(user of users) {
    if(user.name === 'Teste') {
        console.log(user)
    }
}

for(user of users) {
    if(user.status === 'Ativo') {
        console.logo(user)
    }

    return user;
}

for(user of users) {
    if(user.status === 'Ativo') {
        console.log(user)
    }

    return user;
}

for(user of users) {
    if(user.status === 'Ativo') {
        console.log(user)
    } else {
        throw new Error('Erro ao buscar dados.')
    }
}

try {
    for(user of users) {
        if(user.status === 'Ativo') {
            console.log(user)
        }
    }    
} catch (err) {
    console.log(err)
}



try {
    for(user of users) {
        if(user.status === 'Ativo') {
            console.log(user)
        }
    }    
} catch (err) {
    console.error(err)
}


undefined
try {
    for(user of users) {
        if(!user.status === 'Ativo') {
            throw new Error('Propriedade inexistente no objeto.')
        }
    }    
} catch (err) {
    console.error(err)
}


undefined
try {
    for(user of users) {
        if(!user.status === 'Ativo') {
            throw new TypeError('Propriedade inexistente no objeto.')
        }
    }    
} catch (err) {
    console.error(err)
}


undefined
function sum(...values) {
    return values.reduce((a, b) => a + b) 
}

sum(1, 2, 3)
6
function sum(...values) {
    return values.reduce((a, b) => 'Result sum: ', a + b) 
}

sum(1, 2, 3)

function sum(...values) {
    return values.reduce((a, b) => a + b) 
}

sum(1, 2, 3)


const youtubers = [
    { nameChanel: 'Kipper dev', email: 'kipper.dev@gmail.com',age: 23, status: 'Ativo' },
    { name: 'Mário Souto',email: 'dev.sotuinho@gmaii.com', age: 23, status: 'Ativo' },
    { name: 'Filipe Deschamps', email: 'deschamps@gmail.com',age: 23, status: 'Ativo' },
    { name: 'Lucas Montano', email: '',age: 23, status: 'Ativo' },
]