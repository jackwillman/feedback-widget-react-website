import { Request, Response } from 'express';

import config from '../../config';
import { httpError } from '../../helpers';

import { PrismaUsersRepository } from '../users/repositories/prisma';
import { JwtSimpleJwtAdapter } from '../../adapters/jwt/jwtSimple';
import { BcryptHashAdapter } from '../../adapters/hash/bcrypt';

import { LoginUseCase } from './useCases/login';


export const login = async function loginUserController(
    req : Request, 
    res : Response
) {
    const prismaUsersRepository = new PrismaUsersRepository();
    const jwtSimpleJwtAdapter = new JwtSimpleJwtAdapter();
    const bcryptHashAdapter = new BcryptHashAdapter();
    const loginUseCase = new LoginUseCase(
        prismaUsersRepository,
        jwtSimpleJwtAdapter,
        bcryptHashAdapter
    );

    const userIdentifier = req.body.email || req.body.username;
    const { password } = req.body;
    const secretKey = config.secrets.JWT_SECRET;

    if (!secretKey) {
        throw httpError(500, 'Missing Secret Key');
    }
    
    const { userId, session } = await loginUseCase.execute({
        userIdentifier,
        password,
        secretKey
    });

    res.header(config.token.headerName, session.token).status(201).json({ userId });
    return;
};