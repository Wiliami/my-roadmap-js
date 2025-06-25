// fetch(input: string, {
//     method?: "GET" | "POST" | "PUT" | "DELETE",
//     mode?: "navigate" | "same-origin" | "no-cors" | "cors",
//     headers?: { [ key: string ]: any }
//   }): Promise<Response>


async function getUsers() {
    const response = await fetch('https://api.github.com/users/Wiliami')

    if (response.ok) {
        const data = await response.json()
        console.log(data)
    } else {
        console.error('Erro ao buscar usuários')
    }
    
}

console.log(getUsers())
