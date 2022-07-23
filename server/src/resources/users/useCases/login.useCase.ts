import bcrypt from 'bcryptjs';

import config from '../../../config';
import { httpError } from '../../../helpers';

import { JwtAdapter } from '../adapters/jwt.adapter';
import { UsersRepository } from '../repositories/users.repository';

export interface LoginUseCaseRequest {
	userIdentifier : string,
	password : string
};

export const LoginUseCase = class {
    constructor (
        private usersRepository : UsersRepository,
		private jwtAdapter : JwtAdapter
    ) {};
	
    async execute(
		{ userIdentifier, password } : LoginUseCaseRequest
	) {
		if (!userIdentifier) {
			throw new Error ('Please enter your username or email');
		}
		
		let user;
		if (userIdentifier.includes('@')){
			user = await this.usersRepository.getByEmail(userIdentifier);
		} else {
			user = await this.usersRepository.getByUsername(userIdentifier);
		}

		if (!user) {
            throw httpError(400, 'Wrong username, email or password.');
		}

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			throw httpError(400, 'Wrong username, email or password.');
		}

		const secretKey = config.JWT_SECRET;
		if (!secretKey) {
            throw httpError(500, 'Missing Secret Key');
		}

		const partialSession = {
			userId : user.id,
			username : user.username,
			email : user.email
		};

		return this.jwtAdapter.encodeSession({
			secretKey,
			partialSession
		});
	};
};