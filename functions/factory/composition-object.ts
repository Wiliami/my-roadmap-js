// class A {
//     first() {
//         return 1;
//     }

//     second() {
//         return 'Nãaooooo!';
//     }
// }

// class B extends A {
//     third() { 
//         return 3;
//     }
//  }

// const obj = new B();


const a = {
    first() {
        return 1;
    }
}
        
const b = {
    second() {
        return 'Nãaooooo!';
    }
}

const c = {
    third() {
        return 3;
    }
}


const obj = {
    ...a,
    ...c
}
console.log(obj)