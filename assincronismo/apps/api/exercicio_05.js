const URL = "https://pokeapi.co/api/v2/pokemon/ditto"


async function getUsers() {
    const response = await fetch(URL)

    if(response.status === 200) {
        const { id, name, species } = await response.json()

        return {
            id,
            name,
            species
        }
    } else {
        console.error("Erro ao buscar dados")
    }
}


console.log(getUsers())
