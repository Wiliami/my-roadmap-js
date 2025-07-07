// const post = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
// }

// async function createPost() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/postsaaa/', {
//         method: 'POST',
//         headers: {
//             'User-Agent': 'undici-stream-example',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(post)
//     })

//     const data = await response.json()
//     console.log(data)
// }


// createPost().catch(console.error)




// function sum(...numbers: number[]) {
//     numbers.reduce((a, b) => {
//         return a + b
//     })
// }

// console.log(sum(1, 1, 1))

type Users = {
    id: number
    name: string
    email: string
}

async function fetchData(): Promise<Users>{
    return {
        id: 1,
        name: 'Wiliamis',
        email: 'wiliamis@gmail.com'
    }
}
