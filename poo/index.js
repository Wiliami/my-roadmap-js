/* eslint-disable no-unused-vars */
class Utilitario {

    static nome = 'Wiliamis';

    static showUser() {
        return(`Olá, meu nome é ${this.nome}`);
    }
}

console.log(Utilitario.nome);
console.log(Utilitario.showUser());