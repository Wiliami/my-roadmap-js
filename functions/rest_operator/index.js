function person(name, age, ...rest) {
    console.log(rest);
}


person('Wiliamis', 26, 'teste', ['red', 'blue'], { name: 'Alexandre'});