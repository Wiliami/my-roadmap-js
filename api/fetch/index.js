// Site API teste: https://dummyjson.com/


// passando o Id do recurso dinamicamente
async function getData(userId) {
    try {
        const url = `https://dummyjson.com/users/${userId}`
        const response = await fetch(url)
        //console.log(response)

        if(response.status === 200) {
            const { id, firstName, age, gender, email  } = await response.json()
            console.log({
                id,
                firstName,
                age,
                gender,
                email
            })
        } else  {
            console.error('Erro ao buscar dados')
        }
        
    } catch (err) {
        console.error(err.message)
    }
}

getData(1)