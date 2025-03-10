async function getData() {
    const resutConvert = await fetch(users)
    .then(response => response.json())
    .catch(err => {
        console.error(err.message)
    })

    console.log(resutConvert)
}

getData()