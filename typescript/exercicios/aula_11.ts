type githubRepos = {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
}

async function getGithubRepositories(): Przomise<githubRepos[] | > {
    const response = await fetch('https://api.github.com/users/Wiliami/repos')

    if(!response.ok) throw new Error(`Erro ao buscar dados: ${response.statusText}`)

    const repos = await response.json()
    
    return repos.map(({ id, node_id, name, full_name }) => {
        return {
            id,
            node_id,
            name,
            full_name
        }
    })
}

async function fetchRepos() {
    try {
        const repos = await getGithubRepositories()

        console.log(repos)
    } catch (err) {
        console.error(err)
    }
}


fetchRepos()