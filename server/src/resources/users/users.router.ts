import express from 'express';

import { catchErrors } from '../../middlewares';
import { sanitize } from './users.middlewares';

import {
    getUser,
    postUser,
    putUser,
    deleteUser,
    login
} from './users.controller';

const usersRouter = express.Router();

usersRouter
    .route('/users')
    .get(catchErrors(getUser))
    .post(
        [sanitize.username, sanitize.email],
        catchErrors(postUser)
    ).put(
        [sanitize.username, sanitize.email],
        catchErrors(putUser)
    ).delete(catchErrors(deleteUser));

usersRouter
    .route('/session')
    .post(catchErrors(login));

export default usersRouter;