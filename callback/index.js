// callback: É uma função que é passada como argumento pra outra função
function saudacao(nome, callback) {
    console.log(`Olá, ${nome}`)
    callback()
}

function despedida() {
    console.log('Tchau!')
}


saudacao('Wiliamis', despedida)
