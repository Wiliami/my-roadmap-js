// callback: É uma função que é passada como argumento pra outra função
function saudacaoo(nome, callback) {
    console.log(`Olá, ${nome}`)
    callback()
}

function despedidaa() {
    console.log('Tchau!')
}


saudacao('Wiliamis', despedida)
