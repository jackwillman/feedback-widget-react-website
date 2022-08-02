import prisma from "../../../prisma";
import { Id, Username, Email, UserUpdateData, UsersRepository, UserInputData } from ".";

export const PrismaUsersRepository = class implements UsersRepository {
    
    async getById (id : Id) {
        const user = await prisma.user.findUnique({
            where : {
                id
            }
        });

        return user;
    };

    async getByUsername (username : Username) {
        const user = await prisma.user.findUnique({
            where : {
                username
            }
        });

        return user;
    };

    async getByEmail (email : Email) {
        const user = await prisma.user.findUnique({
            where : {
                email
            }
        });

        return user;
    };

    async getAll () {
        const userList = await prisma.user.findMany();
        return userList;
    };

    async create (
        { username, email, password } : UserInputData
    ) {
        await prisma.user.create({
            data : {
                username,
                email,
                password
            }
        });
    };

    async update ({ 
        id, 
        username, 
        email, 
        password 
    } : UserUpdateData
    ) {
        await prisma.user.update({
            where : {
                id : id
            },
            data : {
                username,
                email,
                password
            }
        });
    };

    async delete (id : Id) {
        await prisma.user.delete({
            where : {
                id
            }
        });
    };
};