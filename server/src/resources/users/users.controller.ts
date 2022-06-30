import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { PrismaUsersRepository } from './repositories/prisma.users.repository';

import { GetUserUseCase } from './useCases/getUser.useCase';
import { GetAllUsersUseCase } from './useCases/getAllUsers.UseCase';
import { SubmitUserUseCase } from './useCases/submitUser.useCase';
import { UpdateUserUseCase } from './useCases/updateUser.useCase';
import { DeleteUserUseCase } from './useCases/deleteUser.useCase';

type Controller = (req : Request, res : Response) => Promise<void>;
const userController : Record<string, Controller> = {};

userController.getUser = async function getUserController(
    req : Request, 
    res : Response
) {    
    const prismaUsersRepository = new PrismaUsersRepository();
    let result;
    const userId = req.query.id;

    if (!userId) {
        const getAllUsersUseCase = new GetAllUsersUseCase(
            prismaUsersRepository
        );

        result = await getAllUsersUseCase.execute();
        
    } else {
        const getUserUseCase = new GetUserUseCase(
            prismaUsersRepository
        );
        
        result = await getUserUseCase.execute({ userId });

        if (!result) {
            res.status(404).send('User not found');
            return;
        }
    }

    res.status(200).json(result);
    return;
};

userController.postUser = async function postUserController(
    req : Request, 
    res : Response
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors : errors.array() });
        return;
    }
    
    const prismaUsersRepository = new PrismaUsersRepository();
    const submitUserUseCase = new SubmitUserUseCase(
        prismaUsersRepository
    );

    const { username, email, password } = req.body;
    await submitUserUseCase.execute({
        username,
        email,
        password
    });

    res.status(201).send();
    return;
};

userController.putUser = async function putUserController(
    req : Request, 
    res : Response
) {
    const prismaUsersRepository = new PrismaUsersRepository();
    const updateUserUseCase = new UpdateUserUseCase(
        prismaUsersRepository
    );

    const userId = req.query.id;
    const { username, email, password } = req.body;
    await updateUserUseCase.execute({
        userId,
        username,
        email,
        password
    });

    res.status(201).send();
    return;
};

userController.deleteUser = async function deleteUserController(
    req : Request, 
    res : Response
) {    
    const prismaUsersRepository = new PrismaUsersRepository();
    const deleteUserUseCase = new DeleteUserUseCase(
        prismaUsersRepository
    );

    const userId = req.query.id;
    await deleteUserUseCase.execute({ userId });

    res.status(200).send();
    return;
};

export default userController;