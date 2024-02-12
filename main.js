/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const apiURL = 'https://api.github.com';

function validationResponse(response) {
    if(!response.ok) {
        throw new Error(`Error na solicitação: ${response.statusText}`); 
    } else {
        return response.text(); // tipo da resposta;
    }
}

function getData(url) {
    fetch(url)
    .then(response => validationResponse(response))
    .then((data) => console.log(data)) 
    .catch(error => console.log('Error:', error) );
}