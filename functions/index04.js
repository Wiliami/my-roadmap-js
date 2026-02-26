function soma(a, b, fnCallback) {
    return fnCallback(a + b)
}   

var multiplica = function(result) {
    return result * 2
};

(function(a, b) {
    const result = a + b

    console.log(`O resultado de ${a} + ${b} é: ${result}`)
}(2, 2))


console.log(soma(5, 5, multiplica))