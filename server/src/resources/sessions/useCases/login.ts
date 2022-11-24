import bcrypt from 'bcryptjs';

import config from '../../../config';
import { httpError } from '../../../helpers';

import { JwtAdapter } from '../../../adapters/jwt';
import { HashAdapter } from '../../../adapters/hash';
import { User, UsersRepository } from '../../users/repositories';

type UserIdentifier = string;
type Password = string;
type IsPasswordValid = boolean;

export interface LoginUseCaseRequest {
	userIdentifier : UserIdentifier,
	password : Password
};

export const LoginUseCase = class {
    constructor(
        private usersRepository : UsersRepository,
		private jwtAdapter : JwtAdapter,
		private hashAdapter : HashAdapter
    ) {};

	async getUser(userIdentifier : UserIdentifier) {
		if (!userIdentifier) {
			throw httpError(400, 'Please enter your username or email');
		}
		
		let user;
		if (userIdentifier.includes('@')){
			user = await this.usersRepository.getByEmail(userIdentifier);
		} else {
			user = await this.usersRepository.getByUsername(userIdentifier);
		}

		return user;
	};

	async checkPassword(
		user : User,
		password : Password
	) {
		const isPasswordValid = await this.hashAdapter.checkPassword({
			inputPassword : password, 
			savedPassword : user.password
		});
		return isPasswordValid;
	}

	async createSession(
		user : User,
		isPasswordValid : IsPasswordValid
	) {

		if (!isPasswordValid) {
			throw httpError(400, 'Wrong username, email or password.');
		}

		const secretKey = config.secrets.JWT_SECRET;
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
	
    async execute(
		{ userIdentifier, password } : LoginUseCaseRequest
	) {
		const user = await this.getUser(userIdentifier);
		if (!user) {
            throw httpError(400, 'Wrong username, email or password.');
		}
		
		const isPasswordValid = await this.checkPassword(user, password);
		const session = await this.createSession(user, isPasswordValid);
		return session;
	};
};