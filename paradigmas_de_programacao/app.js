console.log("Hello World!");

const result = function soma(a, b) {
  return a + b;
};

function soma(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(soma(1, 1, 2, 2));
