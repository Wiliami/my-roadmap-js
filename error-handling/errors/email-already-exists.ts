import { BaseError } from "./base-error"; 

export class EmailAlreadyExistsError extends BaseError{
    constructor(email: string) {
        super(`O e-mail ${email} já está em uso.`, 409);
    }
}