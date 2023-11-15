var itens = document.querySelectorAll('.myclass');


// itens.forEach(item => {
//     item.textContent = 'Texto alterado!';
//     console.log(typeof item);
// });

// console.log(itens);


itens.forEach(item => {    
    item.addEventListener('click', () => {
        alert(`Clicou no ${item.textContent}`);
    });
});



// forEach
// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// numbers.forEach((number) => {
//   console.log(number * 2);
// });


// map
// const numbers = [1, 2, 3, 4];

// const doubledNumbers = numbers.map((number) => {
//   return number * 2;
// });

// console.log(doubledNumbers); // Saída: [2, 4, 6, 8];


