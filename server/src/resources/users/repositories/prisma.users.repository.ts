import prisma from "../../../prisma";
import { UserCreateData, UsersRepository } from "./users.repository";

export const PrismaUsersRepository = class implements UsersRepository {
    create = async function ({ username, email, password } : UserCreateData) {
        await prisma.user.create({
            data : {
                username,
                email,
                password
            }
        });
    };
};