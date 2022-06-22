import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { SubmitUserUseCase } from './useCases/submitUser.useCase';
import { PrismaUsersRepository } from './repositories/prisma.users.repository';


const getUser = function getUserController() {};

const postUser = async function postUserController(
    req : Request, 
    res : Response
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors : errors.array() });
        return;
    }

    const { username, email, password } = req.body;
    
    const prismaUsersRepository = new PrismaUsersRepository();

    const submitUserUseCase = new SubmitUserUseCase(
        prismaUsersRepository
    );

    await submitUserUseCase.execute({
        username,
        email,
        password
    });

    res.status(201).send();
    return;
};

const putUser = function putUserController() {};

const deleteUser = function deleteUserController() {};

export default {
    getUser,
    postUser,
    putUser,
    deleteUser
};