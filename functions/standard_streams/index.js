import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function ask(question) {
    rl.question(question, (answer) => {
        rl.write(`A resposta recebida:  ${answer}\n`)

        ask(question)
    })
}

ask("Qual é o seu nome: ")