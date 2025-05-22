async function pegaDados() {
    const resultado = await fetch('https://dummyjson.com/users/1')
    const resultadoConvertido = await resultado.json()
    
    console.log(resultadoConvertido)
}

pegaDados()