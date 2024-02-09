/* eslint-disable indent */
const apiURL = 'https://api.github.com';


function getData(url) {
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .then(error => { 
        console.log('Error:', error);
    });

}

getData(apiURL);
