import { httpError } from '../../../helpers';

import { HashAdapter } from '../../../adapters/hash';
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
        private hashAdapter : HashAdapter
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
            password = await this.hashAdapter.hashPassword({
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