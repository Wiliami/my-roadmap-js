// Site API teste: https://dummyjson.com/


// passando o Id do recurso dinamicamente
async function getData(userId) {
    try {
        const dummyJSON_API = `https://dummyjson.com/users/${userId}`
        const github_API = 'https://api.github.com/users/Wiliami/repos/596434678'

        const response = await fetch(github_API)
        console.log(response.ok)

        if(response.ok) {
            const { node_id, name, full_name } = await response.json()
            console.log({
                node_id,
                name,
                full_name
            })
        } else  {
            console.error('Erro ao buscar dados: ', response.status)
        }
        
    } catch (err) {
        console.error(err.message)
    }
}

getData(1)