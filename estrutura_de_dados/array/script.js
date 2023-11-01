const data = [
	{name: 'Sujeito', age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0},
	{name: 'Sheldon', age: 16, salary: 3000, active: true, team: "Backend", bonus: 0},
	{name: 'Ana Clara', age: 32, salary: 6000, active: false, team: "Mobile", bonus: 0},
	{name: 'Bauer', age: 28, salary: 3500, active: true, team: "Frontend", bonus: 0},
	{name: 'Matheus', age: 	22, salary: 2500, active: false, team: "Mobile", bonus: 0},
];

// Find
// const user = data.find(user => {
// 	return user.salary >= 4000;
// });
// // console.log(user);


// Filter
// const findUser = data.filter((user) => {
// 	return user.salary >= 4000 && user.active;
// });
// console.log(findUser);


// FindIndex
// const indexUser = data.findIndex((user) => {
// 	return user.name === "Bauer";
// });
// console.log(indexUser);
// console.log(data[indexUser].active = false);
// console.log(data);


// Map
// const users= data.map((user, index) => {

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


// Reverse
// console.log(data.reverse()); // inverte nosso array de objeto]


// Some
// const userInactive = data.some((user) => {
// 	return user.active === false;
// });
// console.log(userActive);


// Every
// const usersActive = data.every((user)=> {
// 	return user.active === true;
// });
// console.log(usersActive);


// Reduce
const totalSalarios = data.reduce((total, user) => {
	return total += user.salary; 
}, 0);
console.log(totalSalarios);