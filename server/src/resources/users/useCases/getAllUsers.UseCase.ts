import { UsersRepository } from '../repositories/users.repository';


export const GetAllUsersUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute() {
        return await this.usersRepository.getAll();
    };
};