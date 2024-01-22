class Math {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum() {
        return this.a + this.b;
    }

    substract() {
        return this.a - this.b;
    }

    multiplicator() {
        return this.a * this.b;
    }

    divide() {
        return this.a / this.b;
    }
}



// console.log(this.#a);
const soma = new Math();

const somar = new Math(1, 1);
const subtrair = new Math(5, 7);
const multiplicar = new Math(3, 6);
const divisão = new Math(3, 9);
console.log('Soma:', somar.sum());
console.log('Subtração: ', subtrair.substract());
console.log('Multiplicação:', multiplicar.multiplicator());
console.log('Divisão:', divisão.divide());