// Private
class Veiculo {
    #marca;

    constructor(marca) {
        this.#marca = marca;
    }

    acelerar() {
        console.log(`${this.#marca} acelarandoooooo`);
    }
}


const carro = new Veiculo('Toyota');
console.log(carro.#marca);
carro.acelerar();