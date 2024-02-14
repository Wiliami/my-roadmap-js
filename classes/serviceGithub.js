/* eslint-disable indent */
class ServiceGithub {
    constructor() {
        this.call();
    }

    call(url) {
        fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`Error na solicitação: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log('Error:', error));
    }
}

const apiGithub = new ServiceGithub();
apiGithub.call('https://api.github.com');