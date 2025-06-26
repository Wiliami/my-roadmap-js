const palavras = ['oi', 'olá,', 'paralelepido'];

const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
    console.log('Palavra atual: ', palavraAtual);
    console.log('Maior palavra: ', maiorPalavra);

}, '');


console.log(maiorPalavra);