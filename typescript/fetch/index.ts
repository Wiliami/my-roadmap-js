interface User {
    bio: string
    followers_url: string
    avatar_url: string,
    public_repos: number,
}

async function getProfileUserGithub(): Promise<User | undefined> {
    const response = await fetch('https://api.github.com/users/Wiliami')

    if(response.ok) {
        const { followers_url, avatar_url, public_repos, bio } = await response.json()

        return {
            bio,
            followers_url,
            avatar_url,
            public_repos,
        }
    } else {
        throw new Error('Erro ao buscar dados de perfil de usuário.');
    }
}
 interface Letter {
    result: string
 }

async function getLetras(): Promise<Letter> {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const arr = ['a', 'b', 'c', 'd', 'e', 'f']

    const result = arr.map(letter => {
        console.log(letter)
    })

    return result
}

async function getUsers() {
    // delay 1 sec
    await new Promise(resolve => setTimeout(resolve, 1000))

    return [
        { name: "Wiliamis", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Charlie", age: 28 },
        { name: "Diana", age: 30 },
        { name: "Ethan", age: 22 },
        { name: "Fiona", age: 27 },
        { name: "George", age: 35 },
        { name: "Hannah", age: 29 },
        { name: "Ian", age: 19 },
        { name: "Julia", age: 17 }
    ];
}

console.log(getLetras())
console.log(getUsers())
console.log(getProfileUserGithub())