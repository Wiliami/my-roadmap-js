<<<<<<< HEAD
// fetch(input: String, {
//     method?: "GET" | "POST" | "PUT" | "DELETE",
//     mode?: "navigate" | "same-origin" | "no-cors" | "cors",
//     headers?: { [ key: string ]: any }
// })

fetch("https://rickandmortyapi.com/api/character/322") // promise
.then((response) => {
    console.log(response.json())
})
.catch((err) => {
    console.error(err)
})

=======
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
>>>>>>> 42df812d19fd31bc8188c5a27a667bed020492d0
