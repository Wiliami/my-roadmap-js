function createCounter() {
    let counter = 0;

    return function() {
        counter++
        return counter;
    }
}

const incrementa1 = createCounter();
console.log('Objeto 1: ', incrementa1());
console.log('Objeto 1: ', incrementa1());

console.log('-----------------------------------')

const incrementa2 = createCounter();
console.log('Objeto 2: ', incrementa2());
console.log('Objeto 2: ', incrementa2());
