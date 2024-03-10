/* Push */
// const tags = [];

// tags.push('Wiliamis');
// tags.push('Wiliamis');

// const result = tags;

// console.log(result);


/* Set */
// const tags = new Set([]);

// tags.add('js');
// tags.add('javascript');
// tags.add('js');
// tags.add('js');
// tags.add('js');
// tags.add('js');
// tags.add('js');

// // const result = tags; 
// const result = Array.from(tags);
// console.log(result);


/* Find */
const listaDeUsuarios = [
    { name: 'Wiliamis', username: 'wiliami' },
];

const newUser = { name: 'Dudu', username: 'wiliami'};
const hasUser = listaDeUsuarios.find((user) => {
    return user.username === newUser.username;
});

if(!hasUser) {
    listaDeUsuarios.push(newUser)
};

const result = listaDeUsuarios;
console.log(result);