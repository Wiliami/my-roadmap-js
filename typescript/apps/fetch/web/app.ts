fetch('https://jsonplaceholder.typicode.com/users')
.then(response => console.log(response.json()))
.then(data => console.log(data))
.then(err => console.log('Erro ao recuper dados da API:', err))