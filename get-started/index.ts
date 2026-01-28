// (function() {
//     console.log('Olá')
// })()

function saludos(name: string, callback: () => void) {
    console.log(`Olá, ${name}`)
    return callback()
}

function acerca() {
    return 'tchau'
}

saludos('Wiliamis', acerca);

// (function() {
//     console.log('Olá')
// })() // Immediately Invoked Function Expression 