const employes = [
    { name: 'Rafaela Trindade', age: 24, salary: 1200, active: true, team: 'mobile'},
    { name: 'Caio Mota', age: 30, salary: 2800, active: true, team: 'mobile'},
    { name: 'Felipe Andrade', age: 35, salary: 1700, active: true, team: 'backend'},
    { name: 'André Felipe', age: 21, salary: 1200, active: false, team: 'mobile'},
    { name: 'Ana Beatriz', age: 22, salary: 5400, active: true, team: 'backend'},
    { name: 'Carlos Alberto', age: 39, salary: 5400, active: true, team: 'mobile'},
    { name: 'Juliana Santos', age: 19, salary: 1200, active: false, team: 'frontend'}
];

employes.forEach(employe => {
    console.log(employe);
});


const result = employes.find((user, index) => {
    if(user.salary >= 4000) {
        return user.name;
    }
});

const users_01 = employes.findIndex((user, index) => {
    if(user.salary >= 4000) {
        return user.name;
    }
});


const users = employes.map((user, index) => {

    if(user.salary <= 1200) {
        user.salary += 500;
    }

    return {
        id: index,
        name: user.name,
        salary: user.salary
    };
});


// console.log(users);

