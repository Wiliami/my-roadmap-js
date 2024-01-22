const message_error = document.getElementById('message-error');
// message_error.style.color = 'red'




const buttonSubmit = document.getElementById('submit');
buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    showError("Mostrando mensagem de erro");
});


function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email && password) {
        console.log('Login efetuado com sucesso!');
        // message_error.style.display = 'block';
    } else {
        console.log('Error ao tentar logar');
    }
};


function showError(text) {
    message_error.textContent = text;
}

