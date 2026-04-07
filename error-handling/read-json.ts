import { ValidationError } from "./errors/validation-error";

function readJSON(json: any) {
    let user = JSON.parse(json);

    if(!user.age) {
        throw new ValidationError('No field: age');
    }
    if(!user.name) {
        throw new ValidationError('No field: name');
    }
    
    return user;
}


try {
    let user = readJSON('{ "age": 25, "name": "Teste", "email": "teste@gmail.com" }');

    console.log(user);
} catch (err) {
    if(err instanceof ValidationError) {
        console.log('Invalid data: ' + err.message);
    } else if(err instanceof SyntaxError) {
        console.log('JSON Syntax Error ' + err.message);
    } else {
        throw Error;
    }
}