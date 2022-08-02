import { Request, Response } from 'express';

import config from '../../config';

import { PrismaUsersRepository } from '../users/repositories/prisma';
import { JwtSimpleJwtAdapter } from '../../adapters/jwt/jwtSimple';

import { LoginUseCase } from './useCases/login';

export const login = async function loginUserController(
    req : Request, 
    res : Response
) {

    const prismaUsersRepository = new PrismaUsersRepository();
    const jwtSimpleJwtAdapter = new JwtSimpleJwtAdapter();
    const loginUseCase = new LoginUseCase(
        prismaUsersRepository,
        jwtSimpleJwtAdapter
    );

    const userIdentifier = req.body.email || req.body.username;
    const { password } = req.body;
    
    const { token } = await loginUseCase.execute({
        userIdentifier,
        password
    });

    res.header(config.token.headerName, token).status(201).send();
    return;
};