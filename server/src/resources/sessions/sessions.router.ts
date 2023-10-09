import express from 'express';

import { 
    catchErrors, 
    postValidate 
} from '../../middlewares';

import { login } from './sessions.controller';

const sessionsRouter = express.Router();

sessionsRouter
    .route('/')
    .post(
        [postValidate.username, postValidate.email, postValidate.password],
        catchErrors(login)
    );

export default sessionsRouter;