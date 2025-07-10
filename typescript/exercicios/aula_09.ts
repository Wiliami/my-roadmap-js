type ProfileUserGithub = {
    name: string
    email: string
    bio: string
    public_repos: string
}

type ProfileData = {
    name: string
    email: string
    bio: string
    public_repos: string
}

async function getGithubRepositories(): Promise<ProfileUserGithub | undefined> {
    const response = await fetch('https://api.github.com/users/Wiliami')

    if(!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    }

    const { name, email, bio, public_repos }: ProfileData = await response.json()

    return {
        name,
        email,
        bio,
        public_repos
    }
}


async function profileUserGituhub() {
    try {
        const profileUser = await getGithubRepositories()
        console.log(profileUser)

    } catch (error) {
        console.error('Erro ao buscar dados')
    }
}

profileUserGituhub()
