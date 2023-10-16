import { httpError } from '../../../helpers';

import { PasswordHashAdapter } from '../../../adapters/passwordHash';
import { UsersRepository } from '../repositories';

export interface UpdateUserUseCaseRequest {
    userId : string;
    username? : string;
    email? : string;
    password? : string;
    saltRounds : number;
};

export const UpdateUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository,
        private passwordHashAdapter : PasswordHashAdapter
    ) {};

    async execute ({ 
        userId, 
        username, 
        email,
        password,
        saltRounds 
    } : UpdateUserUseCaseRequest) {

        if (!userId) {
            throw httpError(400, 'User ID is required!');
        }
        
        if (!username && !email && !password) {
            throw httpError(400, 'New data to one of the fields is required!');
        }

        if (password){
            password = await this.passwordHashAdapter.hashPassword({
                password,
                saltRounds
            });
        }

        await this.usersRepository.update({
            id : userId,
            username,
            email,
            password
        });
    };
};