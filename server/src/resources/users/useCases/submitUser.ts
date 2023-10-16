import { httpError } from '../../../helpers';

import { PasswordHashAdapter } from '../../../adapters/passwordHash';
import { UsersRepository } from '../repositories';

export interface SubmitUserUseCaseRequest {
    username : string;
    email : string;
    password : string;
    saltRounds : number;
};

export const SubmitUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository,
        private passwordHashAdapter : PasswordHashAdapter
    ) {};

    async execute({
        username,
        email,
        password,
        saltRounds
    } : SubmitUserUseCaseRequest) {

        if (!username) {
            throw httpError(400, 'Username is required');
        }

        if (!email) {
            throw httpError(400, 'E-mail is required');
        }

        if (!password) {
            throw httpError(400, 'Password is required');
        }

        if (!email.includes('@')) {
            throw httpError(400, 'E-mail is invalid');
        }

        const hashedPassword = await this.passwordHashAdapter.hashPassword({
            password,
            saltRounds
        });

        await this.usersRepository.create({
            username,
            email,
            password : hashedPassword
        });
    };
};