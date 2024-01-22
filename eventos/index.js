// const titulo = document.getElementById('titulo');
// const botao = document.getElementById('MyButton');


// botao.addEventListener('click', () => {
//     titulo.remove();
// });


const myButton = document.getElementById('myButton');

function welcome() {
    alert('Olá, mundo!');
}

function helloWorld() {
    alert('Hello World!');
}

// event handler ou manipulador de eventos
myButton.addEventListener('click', () => {
    welcome(), helloWorld();
});




// apertar o botão

const titulo = document.getElementById('titulo');
titulo.textContent = 'Olá, mundo!!!';

const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const pink = document.getElementById('pink');

yellow.addEventListener('click', () => {
    titulo.textContent = 'O botão amarelo foi clicado!';
    titulo.style.color = 'yellow';
});
red.addEventListener('click', () => {
    titulo.textContent = 'O botão vermelho foi clicado!';
    titulo.style.color = 'red';
});

blue.addEventListener('click', () => {
    titulo.textContent = 'O botão azul foi clicado!';
    titulo.style.color = 'blue';
});

pink.addEventListener('click', () => {
    titulo.textContent = 'O botão rosa foi clicado!';
    titulo.style.color = 'pink';
});