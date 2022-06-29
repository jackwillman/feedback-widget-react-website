import { UsersRepository } from '../repositories/users.repository';

export interface DeleteUserUseCaseRequest {
    userId : any;
};

export const DeleteUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute( { userId } : DeleteUserUseCaseRequest) {
        if (!userId) {
            throw new Error('User ID is required!');
        }

        await this.usersRepository.delete({ userId });
    };
};