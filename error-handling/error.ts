import { readFile } from "node:fs/promises";

async function main() {
    try {
        const file = await readFile("./handling-error/index.js")
        console.log(file.toString());
    } catch (error) {
        console.log("Não foi possível ler o arquivo.");
    } finally {
        console.log('Fim do tratamento de erro.');
    }

    console.log('Fim do programa.');
}

main()
.then(data => console.log())
.catch(error => console.error())