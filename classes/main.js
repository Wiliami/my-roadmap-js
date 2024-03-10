class Pessoa {
    #nome
    idade

    constructor(nome, idade) {  
        this.#nome = nome;
        this.idade = idade;
    };

    get nome() {
        return this.#nome;
    }


    set nome(nome) {
        this.#nome = nome;
    }

    apresentar() {
        return `O meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
    
}


const p1 = new Pessoa('Wiliamis', 26);
console.log(p1.nome = 'Ana');
// console.log(p1.idade);
// console.log(JSON.stringify(p1));
// console.log('Chaves:', Object.keys(p1));
// console.log('Valores:', Object.values(p1));
// console.log(p1.apresentar());


// for(let attrib in p1) {
//     console.log(p1[attrib], attrib);
// }