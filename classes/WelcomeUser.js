class createUser {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    execute() {
        console.log(`Usuário cadastrado com sucesso: Nome: ${this.name}, E-mail: ${this.email}, Senha: ${this.password}`)
    }
}

// const create = new createUser('Wiliamis', 'wiliamis@gmail.com', '123')
// create.execute()


class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.calculaArea();
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}


// const p = new Retangulo(10, 10)

// console.log(p.area)





class Exemplo {
    get propriedade() {
        return 'Olá, mundo!';
        // return new String('Olá, mundo')
    }
}


const exemplo = new Exemplo()
console.log(exemplo.propriedade)