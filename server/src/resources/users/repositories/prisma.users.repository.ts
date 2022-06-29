import prisma from "../../../prisma";
import { UserIdData, UserInputData, UserUpdateData, UsersRepository } from "./users.repository";

export const PrismaUsersRepository = class implements UsersRepository {
    
    get = async function ({ userId } : UserIdData) {
        return await prisma.user.findUnique({
            where : {
                id : userId
            }
        });
    };

    getAll = async function () {
        return await prisma.user.findMany();
    };

    create = async function (
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

    update = async function (
        { userId, username, email, password } : UserUpdateData
    ) {
        await prisma.user.update({
            where : {
                id : userId
            },
            data : {
                username,
                email,
                password
            }
        });
    };

    delete = async function ({ userId } : UserIdData) {
        await prisma.user.delete({
            where : {
                id : userId
            }
        });
    };
};