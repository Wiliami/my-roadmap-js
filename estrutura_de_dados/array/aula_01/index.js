/* eslint-disable indent */
const data = [
	{name: 'Sujeito', age: 23, salary: 4000, active: true, team: 'Frontend', bonus: 0},
	{name: 'Sheldon', age: 16, salary: 3000, active: true, team: 'Backend', bonus: 0},
	{name: 'Ana Clara', age: 32, salary: 6000, active: false, team: 'Mobile', bonus: 0},
	{name: 'Bauer', age: 28, salary: 3500, active: true, team: 'Frontend', bonus: 0},
	{name: 'Matheus', age: 	22, salary: 2500, active: false, team: 'Mobile', bonus: 0},
];

/* Find */
// const user = data.find(user => {
// 	return user.salary >= 4000;
// });
// console.log(user);


/* Filter */
// const findUser = data.filter((user) => {
// 	return user.salary >= 4000 && user.active;
// });
// console.log(findUser);


/* Find Index */
// const indexUser = data.findIndex((user) => {
// 	return user.name === "Bauer";
// });
// console.log(indexUser);
// console.log(data[indexUser].active = false);
// console.log(data);


/* Map */
// const users = data.map((user, index) => {

// 	if(user.salary <= 2500) {
// 		user.salary += 900;
// 		user.bonus += 1;
// 	};

// 	return {
// 		name: user.name,
// 		salary: user.salary,
// 		bonus: user.bonus
// 	}

// });
// console.log(users);


/* Reverse */
// console.log(data.reverse()); // inverte nosso array de objeto]


/* Some */
// const userInactive = data.some((user) => {
// 	return user.active === false;
// });
// console.log(userActive);


/* Every /*
// const usersActive = data.every((user)=> {
// 	return user.active === true;
// });
// console.log(usersActive);


/* Reduce */
// const totalSalarios = data.reduce((total, user) => {
// 	return total += user.salary; 
// }, 0);
// console.log(totalSalarios);


/* For Each */
// const numbers = [1, 2, 3, 4, 5];
// const array = []; // novo array fora da iteração

// numbers.forEach((number) => {
// 	doubledNumbers.push(number * 2);
// });

// const novoArray = doubledNumbers.push('banana');
// console.log(novoArray);



/* obs: Não retorna um novo array */


/* Map */
// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.map((number) => {
// 	return number * 2;
// });

// console.log(doubleNumbers);



// const array = [1, 2, 3, 4, 5];
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


/* Some */
// const pelosMenosUmItemNaoEUmNumero = array.some(item => {
//     return typeof item !== 'number';
// });

/* Find */
// const par = array.find(item => item % 2 === 0);


/* find Index */
// const par = array.findIndex(item => {
//     return item % 2 === 0;
// });


/* Reduce */
// const soma = array.reduce((acc, item) => {
//     document.body.innerText += acc + ',' + item + ' --- ';

//     return acc + item;
// }, 0);

// const array1 = [1, 2, 3, 4];
// const initial = 0;
// const sumWithInitial = array1.reduce((acc, item) => {
//     document.body.innerText += acc + ',' + item + ' --- ';

//     return acc + item;
// }, initial);

// const array1 = [1, 2, 3, 4];
// const sumWithInitial = array1.reduce((acc, item) => acc + item, 0);

// document.body.innerText = JSON.stringify(sumWithInitial);


// const fruits = [ 
//     { name: 'banana', color: 'yellow', price: 2 },
//     { name: 'melancia', color: 'red', price: 3 },
//     { name: 'uva', color: 'purple', price: 4 }
// ];

// const result = fruits.reduce((acc, item) => {
//     return acc + item.price;
// }, 0);


// const frutas = fruits.filter(item => {
//     if(item.name === 'melancia') {
//         return item;
//     }
// });

/* document.body.innerText = JSON.stringify(frutas); */



// const users = [
//     { name: 'Wiliamis', age: 26, gender: 'Masculino' },
//     { name: 'Teste', age: 25, gender: 'Masculino' },
//     { name: 'Admin', age: 24, gender: 'Masculino' },
//     { name: 'Teste1', age: 23, gender: 'Feminino' },
// 	{ name: 'Teste 2', age: 27, gender: 'Feminino'}
// ];

// const result = users.find((user) => {
// 	return user.age >= 25; 
// });

// const result = users.filter(user => {
//     return user.age >= 25 && user.gender === 'Masculino';
// });


// const females = users.filter(user => {
// 	return user.gender === 'Feminino;';
// });

// const mens = users.filter(user => {
// 	return user.gender === 'Masculino';
// });



// console.log(result);
// console.log('Feminino:', females);
// console.log('Masculino:', mens);


// const numeros = [10, 20, 30, 40, 50, 60]; // vetor de uma dimensão

// for(let i = 10; i < numeros.length; i++) {
// 	console.log(numeros[i]);
// }