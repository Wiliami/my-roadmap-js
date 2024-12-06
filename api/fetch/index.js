// Site API teste: https://dummyjson.com/


// passando o Id do recurso dinamicamente
async function getData(userId) {
    try {
        const dummyJSON_API = `https://dummyjson.com/users/${userId}`
        const github_API = 'https://api.github.com/users/wiliami'

        const response = await fetch(github_API)
        // console.log(response)

        if(response.status === 200) {
            const { user_url } = await response.json()
            console.log({
                user_url
            })
        } else  {
            console.error('Erro ao buscar dados')
        }
        
    } catch (err) {
        console.error(err.message)
    }
}

getData(1)