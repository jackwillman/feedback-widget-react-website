import express from 'express';

import { 
    CheckJwtAuthorization, 
    catchErrors, 
    catchMiddlewareErrors 
} from '../../middlewares';
import { 
    postValidate,
    putValidate 
} from '../../middlewares';

import { JwtSimpleJwtAdapter } from '../../adapters/jwt/jwtSimple';
import {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} from './users.controller';

const jwtSimpleAdapter = new JwtSimpleJwtAdapter();
const authMiddleware = new CheckJwtAuthorization(jwtSimpleAdapter);

const usersRouter = express.Router();

usersRouter
    .route('/')
    .get(catchErrors(getUsers))
    .post(
        [postValidate.username, postValidate.email, postValidate.password],
        catchErrors(postUser)
    );

    usersRouter
    .route('/auth')
    .get(
        catchMiddlewareErrors(authMiddleware.execute),
        catchErrors(getUser)
    ).put(
        [putValidate.username, putValidate.email, putValidate.password],
        catchMiddlewareErrors(authMiddleware.execute), 
        catchErrors(putUser)
    ).delete(
        catchMiddlewareErrors(authMiddleware.execute), 
        catchErrors(deleteUser)
    );

    

export default usersRouter;