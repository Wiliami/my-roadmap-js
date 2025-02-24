// console.log("Hello world");
/* Testando a feat decorator JS*/
function log() {
  return "Hello World";
}

class Hello {
  // @log
  greet() {
    return "Hello world.";
  }
}

const teste = new Hello();
console.log(teste.greet());