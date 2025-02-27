if (condição)
  if (1 + 1 === 1) {
    // afirmação1 [else afirmação2]
    console.log("A afirmação é verdadeira");
  } else {
    console.log("A afirmação é falsa.");
  }

// Neste caso, mesmo instanciando um valor como falso a condicional a afirmação como verdadeiro
var b = new Boolean(false);
if (b) {
  console.log("O objeto b é verdadeiro");
} else {
  console.log("O objeto b é falso.");
}
