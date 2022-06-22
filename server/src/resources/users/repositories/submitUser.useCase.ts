import bcrypt from 'bcryptjs';

import { UsersRepository } from './users.repository';

export interface SubmitUserUseCaseRequest {
    username : string;
    email : string;
    password : string;
};

export const SubmitUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository,
    ) {};

    async execute(request : SubmitUserUseCaseRequest) {
        const { username, email, password } = request;

        if (!username) {
            throw new Error('Username is required');
        }

        if (!email) {
            throw new Error('Email is required');
        }

        if (!password) {
            throw new Error('Password is required');
        }

        const salt = await bcrypt.genSalt(10);
		const encrypted_password = await bcrypt.hash(password, salt);

        await this.usersRepository.create({
            username,
            email,
            password : encrypted_password
        });
    };
};