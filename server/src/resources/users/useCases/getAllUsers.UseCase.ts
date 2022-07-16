import { UsersRepository, UserSelectedDataList } from '../repositories/users.repository';


export const GetAllUsersUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute() {
        const userList = await this.usersRepository.getAll();

        if (!userList) {
            return;
        }

        const selectedData : UserSelectedDataList = {};
        userList.forEach((user) => {
            
            selectedData[user.id] = {
                username : user.username,
                email : user.email
            };
        });
        return selectedData;
    };
};