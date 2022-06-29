import { UsersRepository } from '../repositories/users.repository';

export interface GetUserUseCaseRequest {
    userId : any;
};

export const GetUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute( { userId } : GetUserUseCaseRequest) {
        
        if (!userId) {
            throw new Error('User ID is required!');
        }

        const user = await this.usersRepository.get({ userId });
        delete user.id;
        delete user.password;
        return user;
    };
};