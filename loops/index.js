function somaTudo(numeros) {
    var total = 0

    for(var num of numeros) {
        total = total + num
    } 

    return total
}

var arrayNumeros = [ 2, 3 ] // 5
var resultado = somaTudo(arrayNumeros)
console.log(resultado)
