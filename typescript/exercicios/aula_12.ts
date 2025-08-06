type Posts = {
    userId: number
    id: number
    title: string
    body: string
}

async function posts(): Promise<Posts> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!response.ok) throw new Error(`Erro ao buscar posts: ${response.statusText}`)
    
    const { userId, id, title, body } = await response.json()

    return {
        userId,
        id,
        title,
        body
    }
}

async function getPosts() {
    try {
        const getPosts = await posts()
        console.log(getPosts)

    } catch (err) {
        console.error('Erro ao buscar dados: ', err)
    }
}

getPosts()