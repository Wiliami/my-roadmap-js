var pessoa = {
    nome: ["Bob", "Smith"],
    idade: 32,
    sexo: "masculino",
    interesses: ["música", "esquiar"],
    bio: function () {
      alert(
        this.nome[0] +
          " " +
          this.nome[1] +
          " tem " +
          this.idade +
          " anos de idade. Ele gosta de " +
          this.interesses[0] +
          " e " +
          this.interesses[1] +
          ".",
      );
    },
    saudacao: function () {
      alert("Oi! Eu sou " + this.nome[0] + ".");
    },
  };

  // console.log(pessoa.idade)
  // console.log(pessoa.interesses[0])
  // // console.log(pessoa.bio())
  
  // console.log(pessoa["sexo"])



const person = {
  name: 'Wiliamis',
  age: 27,
  gender: 'male'
}

console.log(person['name'])
