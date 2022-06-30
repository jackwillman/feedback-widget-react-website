import { UsersRepository } from '../repositories/users.repository';


export const GetAllUsersUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute() {
        const userList = await this.usersRepository.getAll();

        const selectedData : Record<string, any> = {};
        for (const user in userList) {
            let id = userList[user].id;
            
            selectedData[id] = {
                username : userList[user].username,
                email : userList[user].email
            };
        }
        return selectedData;
    };
};