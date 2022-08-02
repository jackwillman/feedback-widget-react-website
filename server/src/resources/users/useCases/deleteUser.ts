import { httpError } from '../../../helpers';

import { UsersRepository } from '../repositories';

export interface DeleteUserUseCaseRequest {
    userId : string;
};

export const DeleteUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute( { userId } : DeleteUserUseCaseRequest) {
        if (!userId) {
            throw httpError(400, 'User ID is required!');
        }

        await this.usersRepository.delete(userId);
    };
};