/* Programação Imperativa */
// let a = 1;
// let b = 2;

// function soma() {
//     return a + b;
// }
// console.log(soma());


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
// /* Programação funcional */
// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(1, 1));





function somaNaturais(n) {
    if(n === 1) {
        return 1;
    } else {
        return n + somaNaturais(n - 1);
    }
}


console.log(somaNaturais(2));

const hello = 'Hello World!';
document.write(hello);