/* eslint-disable indent */
class ServiceGithub {
    url = 'https://api.github.com/users';
    client_id = '9d71a8c4106f4ea74ef9';
    client_secret = 'f9ff9a14fad8c26a809624c6bd2007690311b4af';
    profile_response = '';

    /**
     * 
     * @param {string} user Recebe o parâmetro em string
     * @returns 
     */

    async finder(user) {
        try {

            if(typeof user != 'string') {
                console.log('Parâmetro inválido! A função aceita somente string');
            } else {
                this.profile_response = await fetch(
                    `${this.url}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
                );
                if(!this.profile_response.ok) {
                    throw new Error(`Error na solicitação: ${this.profile_response.status}`);
                }
                
                return await this.profile_response.json();
            }

        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}


export default ServiceGithub;