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

