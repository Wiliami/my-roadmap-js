class Utilitario {
    static versao = '1.0';

    static obterVersao() {
        return Utilitario.versao;
    }
}

console.log(Utilitario.versao);
console.log(Utilitario.obterVersao());