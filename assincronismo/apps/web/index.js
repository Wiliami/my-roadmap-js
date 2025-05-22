const url = 'https://api.github.com';


fetch(url)
.then(response => console.log(response.json()))
.then(data => console.log(data))
.catch(error => console.log('Error ao buscar dados', error))