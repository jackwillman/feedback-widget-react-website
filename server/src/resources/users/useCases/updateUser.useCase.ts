import bcrypt from 'bcryptjs';

import { httpError } from '../../../helpers';
import { UsersRepository } from '../repositories/users.repository';

export interface UpdateUserUseCaseRequest {
    userId : string;
    username? : string;
    email? : string;
    password? : string;
};

export const UpdateUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute (request : UpdateUserUseCaseRequest) {
        const { userId, username, email } = request;
        let { password } = request;

        if (!userId) {
            throw httpError(400, 'User ID is required!');
        }
        
        if (!username && !email && !password) {
            throw httpError(400, 'New data to one of the fields is required!');
        }

        if (password) {
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
        }

        await this.usersRepository.update({
            id : userId,
            username,
            email,
            password
        });
    };
};