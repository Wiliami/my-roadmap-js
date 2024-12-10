// Site API teste: https://dummyjson.com/


// passando o Id do recurso dinamicamente
async function getData(userId) {
    try {
        const dummyJSON_API = `https://dummyjson.com/users/${userId}`
        const github_API = 'https://api.github.com/users/wiliami'

        const response = await fetch(github_API)
        // console.log(response)

        if(response.status === 200) {
            const { name, bio } = await response.json()
            console.log({
                name,
                bio
            })
        } else  {
            console.error('Erro ao buscar dados')
        }
        
    } catch (err) {
        console.error(err.message)
    }
}

getData(1)