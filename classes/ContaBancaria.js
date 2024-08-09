class ContaBancaria {
    // Private
    #saldo = 1000;

    // Método privado
    #verificarSaldo() {
        return this.#saldo;
    }

    // Método público que acessa o método privado
    obterSaldo() {
        return this.#verificarSaldo();
    }
}

const minhaConta = new ContaBancaria();
console.log(minhaConta.obterSaldo);


export default ContaBancaria;

