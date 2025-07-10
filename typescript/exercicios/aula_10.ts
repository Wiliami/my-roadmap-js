type Repositories = {
    id: number
    name:string
    full_name: string
}

type DataRepositories = {
    id: number
    name:string
    full_name: string
}

async function userRepositories(): Promise<Repositories> {
    const response = await fetch('https://api.github.com/users/Wiliami/repos')

    if(!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    }   

    const { id, name, full_name }: DataRepositories = await response.json()

    return {
        id,
        name, 
        full_name,
    }
}


async function getUserRepositoriesGithub() {
    try {
        const repos = await userRepositories()
        console.log(repos)
    } catch (error) {
        console.error('Erro ao buscar repositórios')
    }
}

getUserRepositoriesGithub()