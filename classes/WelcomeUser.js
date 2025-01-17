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

const create = new createUser('Wiliamis', 'wiliamis@gmail.com', '123')
create.execute()