function saudacao(name: string, callback: any) {
    console.log(`Olá, ${name}.`)
    callback()
}

function despedida() { 
    return 'Tchau!'
}

saudacao('Wiliamis', despedida)