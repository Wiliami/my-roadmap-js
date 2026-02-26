const replacer = (key, value) => {
    if (key === "id") return undefined;
  
    return value
}

const object = {
    name: "John",
    id: "john",
    obj: {
        name: "Jane",
        id: "jane",
    },
}


// parameters => variáveis
// argumentos => valores

console.log(JSON.stringify(object, replacer, 2))
