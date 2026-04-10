function userFactory(name: string, email: string) {
    let counter = 0;

    return {
        increment: () => counter++,
        name,
        email,
    };
};

const wiliamis = userFactory('Wiliamis', 'wiliamis@gmail.com');
const brazjunior = userFactory('Braz Junior', 'brazjunior@gmail.com');

console.log(wiliamis)
console.log(wiliamis.increment())
console.log(wiliamis.increment())

console.log(brazjunior)
console.log(brazjunior.increment())
console.log(brazjunior.increment())