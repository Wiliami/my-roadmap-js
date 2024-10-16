const users = [
    { name: 'Wiliamis', age: 27 },
    { name: 'Kipper Dev', age: 28 },
    { name: 'Filipe Deschamps', age: 38 },
    { name: 'Justin Bieber', age: 15 },
];


users.forEach(user => {
    if(user.age < 18) {
        console.log(user.name);
    } else {
        console.log(user);
    }
});