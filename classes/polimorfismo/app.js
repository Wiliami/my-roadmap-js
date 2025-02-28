class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularDesconto() {
    throw new Error("O método calcuçarDesconto deve ser obrigatório.");
  }
}

class ProdutoEletronico extends Produto {
  constructor(nome, preco, garantiaMeses) {
    super(nome, preco);
    this.garantiaMeses = garantiaMeses;
  }

  calcularDesconto() {
    return this.preco * 0.1;
  }
}

function aplicarDesconto(produto) {
  const desconto = produto.calcularDesconto(); // 1000 * 0.1 = 100
  const precoComDesconto = produto.preco - desconto; // 1000 - 100 = 900,00
  console.log(
    `Preço com desconto para ${produto.nome}: $${precoComDesconto
      .toFixed(2)
      .replace(".", ",")}`
  );
}

const tablet = new ProdutoEletronico("Tablet", 1000, 10);
aplicarDesconto(tablet);

// const result = 1000 - 100; /* preco * 0.1 */
// console.log(result);
