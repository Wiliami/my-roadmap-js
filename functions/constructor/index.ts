const sum = new Function("a", "b", "return a + b");

function soma(a: number, b: number) {
    return a + b;
}

console.log(sum(1, '1'));