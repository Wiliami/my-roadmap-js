interface Person  {
    name: string
    age: number
}


function greet(person: Person)  {
    return 'olá, ' + person.name + ' ' + person.age
}   

console.log(greet({
    name: 'Wiliamis',
    age: 27
}))