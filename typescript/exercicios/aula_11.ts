type repositoriesData = {

}

async function getReposGithub(): Promise<repositoriesData> {
    const response = await fetch('https://api.github.com/users/Wiliami')

    if(!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    }

    const { login, id, bio } = await response.json()

    return {

    }

    

}