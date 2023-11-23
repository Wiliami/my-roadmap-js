let titulo = document.querySelector('h1');
titulo.textContent = 'Aula 9 Manipular o CSS';

let imagem = document.getElementById('foto');
imagem.setAttribute('src', './assets/img/pride-fc.jpg');
imagem.setAttribute('width', '250px');


titulo.style.color = 'red';
titulo.style.backgroundColor = '#000';
titulo.style.borderBottom = '2px solid red';
titulo.style.padding = '0.625rem';
titulo.style.borderRadius = '5px';

let tela = document.querySelector('main');

let btnDark = document.querySelector('#btdark');
let btnLight = document.querySelector('#btlight');


btnDark.addEventListener('click', modeDark);
btnLight.addEventListener('click', modeLight);

function modeDark() {
    console.log('Mode dark');
    tela.classList.add('dark');
    tela.classList.remove('light');
}

function modeLight() {
    console.log('Mode light');
    tela.classList.remove('dark');
    tela.classList.add('light');
}