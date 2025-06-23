async function getData() {
    const response = await fetch('https://dummyjson.com/users/1');

    console.log(response);

    if(response.ok) {
        const { id, firstName, lastName } = await response.json();

        return {
            id,
            firstName,
            lastName
        }

    } else {
        console.log('Deu ruim!')
    }
}


try {
    const users = await getData()

    console.log(`Olá, ${users.firstName}`)
} catch (err) {
    console.log('Erro ao buscar usuários', err)
}