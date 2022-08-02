import bcrypt from 'bcryptjs';

import config from '../../../config';
import { httpError } from '../../../helpers';

import { JwtAdapter } from '../../../adapters/jwt';
import { User, UsersRepository } from '../../users/repositories';

type UserIdentifier = string;
type Password = string;

export interface LoginUseCaseRequest {
	userIdentifier : UserIdentifier,
	password : Password
};

export const LoginUseCase = class {
    constructor(
        private usersRepository : UsersRepository,
		private jwtAdapter : JwtAdapter
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

	async createSession(
		user : User,
		password : Password
	) {
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
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
		
		const session = await this.createSession(user, password);
		return session;
	};
};