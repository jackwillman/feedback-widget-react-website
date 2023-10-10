import { httpError } from '../../../helpers';

import { UsersRepository } from '../repositories';

export interface GetUserUseCaseRequest {
    userId : string;
};

export const GetUserUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute( { userId } : GetUserUseCaseRequest) {
        
        if (!userId) {
            throw httpError(400, 'User ID is required!');
        }

        const user = await this.usersRepository.getById(userId);
        
        if (!user) {
            throw httpError(404, 'User not found!');
        }
        
        const selectedData = {
            id : user.id,
            username : user.username,
            email : user.email,
            password : user.password
        };
        
        return selectedData;
    };
};