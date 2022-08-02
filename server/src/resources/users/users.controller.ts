import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { httpError } from '../../helpers';

import { PrismaUsersRepository } from './repositories/prisma';

import { GetUserUseCase } from './useCases/getUser';
import { GetAllUsersUseCase } from './useCases/getAllUsers';
import { SubmitUserUseCase } from './useCases/submitUser';
import { UpdateUserUseCase } from './useCases/updateUser';
import { DeleteUserUseCase } from './useCases/deleteUser';

export const getUser = async function getUserController(
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
        if (!result) {
            throw httpError(404, 'No user was found');
        }
        
    } else {
        if (typeof userId !== 'string') {
            throw httpError(400, 'User ID is not a string');
        }

        if (req.query.id !== res.locals.userId) {
            throw httpError(403, 'You do not have permission to access this resource.');
        }

        const getUserUseCase = new GetUserUseCase(
            prismaUsersRepository
        );
        result = await getUserUseCase.execute({ userId });

        if (!result) {
            throw httpError(404, 'User not found');
        }
    }

    res.status(200).json(result);
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
    const prismaUsersRepository = new PrismaUsersRepository();
    const updateUserUseCase = new UpdateUserUseCase(
        prismaUsersRepository
    );

    const userId = req.query.id;

    if (typeof userId !== 'string') {
        throw httpError(400, 'User ID is not a string');
    }

    if (req.query.id !== res.locals.userId) {
        throw httpError(403, 'You do not have permission to access this resource.');
    }
    
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
    if (typeof userId !== 'string') {
        throw httpError(400, 'User ID is not a string');
    }

    if (req.query.id !== res.locals.userId) {
        throw httpError(403, 'You do not have permission to access this resource.');
    }

    await deleteUserUseCase.execute({ userId });

    res.status(200).send();
};