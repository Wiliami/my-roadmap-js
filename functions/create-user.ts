import { BaseError } from '../error-handling/errors/base-error';
import { EmailAlreadyExistsError } from '../error-handling/errors/email-already-exists';

interface IUser {
    name: string
    email: string
}

export function createUser({ name, email }: IUser) {
    const userExisting = foundUserByEmail(email);

    // Design pattern: Clause guard
    if(!name || !email) {
       console.log('Campos obrigatórios.')
       return;
    }

    if(userExisting) {
        throw new EmailAlreadyExistsError(email);
    }

    const user = saveUserInDatabase(
        name,
        email
    )

    return { user };
}

function foundUserByEmail(email: string) {
    if(email === 'teste@gmail.com') {
        return true
    }
    
    return false;
}

function saveUserInDatabase(name: string, email: string) {
    let database = [];

    database.push(
        email,
        name
    )

    return database;
}

// Na route handler
const obj = {
    name: "Teste",
    email: "teste@gmail.com"
}

function GET() {
    try {
        const { name, email } = obj; // req.body

        const { user } = createUser({ name, email });

        console.log('Usuário cadastrado com sucesso:', user); 
        return user;

    } catch (err) {
        if(err instanceof BaseError) {
            console.log('Error:', err.message);
            console.log('Status code:', err.statusCode);
        } else {
            console.log('Internal server error');
        }
    }
}

GET();
