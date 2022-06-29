import express from 'express';

import { catchErrors } from '../../middlewares';
import { sanitize } from './users.middlewares';

import usersController from './users.controller';


const usersRouter = express.Router();

usersRouter
    .route('/')
    .get(catchErrors(usersController.getUser))
    .post(
        [sanitize.username, sanitize.email],
        catchErrors(usersController.postUser)
    ).put(
        [sanitize.username, sanitize.email],
        catchErrors(usersController.putUser)
    ).delete(catchErrors(usersController.deleteUser));

export default usersRouter;