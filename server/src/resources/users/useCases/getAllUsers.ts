import { UsersRepository, UserSelectedDataList } from '../repositories';


export const GetAllUsersUseCase = class {
    constructor (
        private usersRepository : UsersRepository
    ) {};

    async execute() {
        const userList = await this.usersRepository.getAll();

        const selectedData : UserSelectedDataList = {};

        if (!userList) {
            return selectedData;
        }

        userList.forEach((user) => {
            selectedData[user.id] = {
                username : user.username,
            };
        });
        return selectedData;
    };
};