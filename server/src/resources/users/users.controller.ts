import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { httpError, checkAuth } from '../../helpers';

import { PrismaUsersRepository } from './repositories/prisma';

import { GetUserUseCase } from './useCases/getUser';
import { GetAllUsersUseCase } from './useCases/getAllUsers';
import { SubmitUserUseCase } from './useCases/submitUser';
import { UpdateUserUseCase } from './useCases/updateUser';
import { DeleteUserUseCase } from './useCases/deleteUser';

export const getUsers = async function getUserController(
    req : Request, 
    res : Response
) {    
    const prismaUsersRepository = new PrismaUsersRepository();
    const getAllUsersUseCase = new GetAllUsersUseCase(
        prismaUsersRepository
    );

    const result = await getAllUsersUseCase.execute();
    if (!result) {
        throw httpError(404, 'No user was found');
    }

    res.status(200).json(result);    
};

export const getUser = async function getUserController(
    req : Request, 
    res : Response
) {    
    
    const userId = req.query.id;
    if (!userId || typeof userId !== 'string') {
        throw httpError(400, 'User ID is not a string');
    }
    checkAuth(res, userId);

    const prismaUsersRepository = new PrismaUsersRepository();
    const getUserUseCase = new GetUserUseCase(
        prismaUsersRepository
    );

    const user = await getUserUseCase.execute({ userId });
    if (!user) {
        throw httpError(404, 'User not found');
    }

    res.status(200).json(user);
};

export const postUser = async function postUserController(
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
};

export const putUser = async function putUserController(
    req : Request, 
    res : Response
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors : errors.array() });
        return;
    }

    const userId = req.query.id;
    if (!userId || typeof userId !== 'string') {
        throw httpError(400, 'User ID is not a string');
    }
    checkAuth(res, userId);

    const prismaUsersRepository = new PrismaUsersRepository();
    const updateUserUseCase = new UpdateUserUseCase(
        prismaUsersRepository
    );
    
    const { username, email, password } = req.body;
    await updateUserUseCase.execute({
        userId,
        username,
        email,
        password
    });

    res.status(201).send();
};

export const deleteUser = async function deleteUserController(
    req : Request, 
    res : Response
) {    
    const prismaUsersRepository = new PrismaUsersRepository();
    const deleteUserUseCase = new DeleteUserUseCase(
        prismaUsersRepository
    );

    const userId = req.query.id;
    if (!userId || typeof userId !== 'string') {
        throw httpError(400, 'User ID is not a string');
    }
    checkAuth(res, userId);

    await deleteUserUseCase.execute({ userId });

    res.status(200).send();
};