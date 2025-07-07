// function identity(arg: number): number {
//     return arg
// }

// function identity(arg: any): any {
//     return arg
// }

function identity<Type>(arg: Type): Type {
    return arg
}

// console.log(identity({
//     name: 'Wiliamis',
//     age: 27,
// }))


console.log(identity(22))

// await new Promise((resolve) => setTimeout(resolve, 1000))
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             name: 'Wiliamis',
//             age: 27
//         })
//     }, 3000)
// })   


// async function executePromise() {
//     try {
//         const response = await myPromise   

//         return response

//     } catch (err) {
//         return new Error('Deu ruim', err)
//     }
// }



// console.log(executePromise())



// import { useState, useEffect } from 'react'

// type Users = {
//     id: number
//     name: string
//     email: string
// }

// export default function Users() {
//     const [ users, setUsers ] = useState<Users>([])
//     const [ loading, setLoading ] = useState([])

//     useEffect(() => {
//         async function getUsers() {
//             const response = await fetch('http://localhost:3000/users')
       
//             if(response.ok) {
//                 return await response.json()
//             } else {
//                 throw new Error('Erro ao buscar dados.')
//             }
//         }

//         getUsers()

//     }, [])
// }

async function getData() {
   const response = await fetch('https://jsonplaceeferfholder.typicode.com/posts/1')
   const data = await response.json()


   console.log(data)
}

getData().catch((err) => console.error(err))