const array = [1, 2, 3, 4];

/* Map */
// const novoArray = array.map(item => {
//     if(item % 2 === 0)    {
//         return item * 10;
//     } 
//         return item;
// }); 


/* Filter */
// const novoArray = array.filter(item => item % 2 === 0);


/* Every */
// const todosItensSaoNumeros = array.every(item => {
//     return typeof item === 'number'
// });


/* Filter */
const pelosMenosUmItemNaoEUmNumero = array.some(item => {
    return typeof item !== 'number';
});


document.body.innerText = JSON.stringify(pelosMenosUmItemNaoEUmNumero);