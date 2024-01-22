class Pessoa {
    name;
    age;
    weight;
    height;

    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;   
    }
}

const pessoa1 = new Pessoa('Wiliamis', 26, 50, 1.50); 
const pessoa2 = new Pessoa('Maria', 47, 70, 1.68);
console.log(pessoa1);
console.log(pessoa2);