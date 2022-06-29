import prisma from "../../../prisma";
import { UserIdData, UserInputData, UserUpdateData, UsersRepository } from "./users.repository";

export const PrismaUsersRepository = class implements UsersRepository {
    
    get = async function ({ userId } : UserIdData) {
        const user = await prisma.user.findUnique({
            where : {
                id : userId
            }
        });

        if (!user) {
            return;
        }
        
        const selectedData = {
            id : user.id,
            username : user.username,
            email : user.email
        };
        
        return selectedData;
    };

    getAll = async function () {
        const userList = await prisma.user.findMany()

        const selectedData : Record<string, any> = {};
        for (const user in userList) {
            let id = userList[user].id;
            
            selectedData[id] = {
                id,
                username : userList[user].username,
                email : userList[user].email
            };
        }
        return selectedData;
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