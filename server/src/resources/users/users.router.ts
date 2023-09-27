import express from 'express';

import { CheckJwtAuthorization, catchErrors, catchMiddlewareErrors } from '../../middlewares';
import { validate } from '../../middlewares';

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
        [validate.username, validate.email, validate.password],
        catchErrors(postUser)
    );

    usersRouter
    .route('/auth')
    .get(
        catchMiddlewareErrors(authMiddleware.execute),
        catchErrors(getUser)
    ).put(
        [validate.username, validate.email, validate.password],
        catchMiddlewareErrors(authMiddleware.execute), 
        catchErrors(putUser)
    ).delete(
        catchMiddlewareErrors(authMiddleware.execute), 
        catchErrors(deleteUser)
    );

    

export default usersRouter;