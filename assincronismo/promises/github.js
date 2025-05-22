async function pegaDados() {
    const resultado = await fetch('https://api.github.com/users/Wiliami')
    const resultadoConvertido = await resultado.json()
    
    // console.log(resultadoConvertido);

    const { name, bio  } = resultadoConvertido;
    console.log({
        name,
        bio
    })
}

pegaDados()