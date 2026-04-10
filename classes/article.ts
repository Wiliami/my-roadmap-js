class Article {
    title: string;
    date: Date;

    constructor(title: string, date: Date) {
        this.title = title;
        this.date = date;
    }    
}

const articles = [
    new Article('HTML', new Date(2026, 4, 7)),
    new Article('CSS', new Date(2026, 4, 8)),
    new Article('HTML', new Date(2026, 4, 10)),
];

class MyClass {}

class Reptile {
    firstAppearance: string;

    constructor(firstAppearance: string) {
        this.firstAppearance = firstAppearance;
    }

    getFirstAppearance() {
        return this.firstAppearance;
    }

    static getClassName() {
        return this.name;
    }
}

class Dragon extends Reptile {
    constructor(firstAppearance: string) {
        super(firstAppearance)
    }
}

const smaug = new Dragon('The Hobbit') 

// console.log(Reptile.getClassName());

const movies = [
    'Chocolate',
    'Banana',
    'Acabacate'
];
// console.log(movies.sort());

const numbers = [732, 20, 70, 64, 1, 10, 500, 404]; // 1, 10, 20, 64, 70, 404, 500, 732
/* Tabela de pontuação de caracterece Unicode: 
    [1, 100, 15, 20, 404, 500, 64, 70, 732]
*/

// const result = numbers.sort((item1, item2) => {
//     console.log(`Comparando ${item1} e ${item2}`);
// })


// console.log(result);


const method1 = {
    method1() {
        return 'String from method1';
    }
}


const dontWant = {
    dontWant() {
       throw new Error('Nooooooo!')
    }
}

const method2 = {
    method2() {
        return 'String from method2';
    }
}


const instance = {...method1, ...method2};

console.log(instance.method1())

/* 
Statement: instrução
Declaration: declaração
expression: Expressão
*/