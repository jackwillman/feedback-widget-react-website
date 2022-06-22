import express from 'express';

import { catchErrors } from '../../middlewares';
import { sanitize } from './users.middlewares';

import usersController from './users.controller';


const usersRouter = express.Router();

usersRouter
    .route('/')
    .post(
        [sanitize.username, sanitize.email],
        catchErrors(usersController.postUser)
    )
    /*
    .get(catchErrors(usersController.getUser))
    .put(
        [sanitize.username, sanitize.email],
        catchErrors(usersController.putUser)
    )
    .delete(catchErrors(usersController.deleteUser));
    */

export default usersRouter;