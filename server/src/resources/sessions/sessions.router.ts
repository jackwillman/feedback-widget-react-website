import express from 'express';

import { 
    catchErrors, 
    validate 
} from '../../middlewares';

import { login } from './sessions.controller';

const sessionsRouter = express.Router();

sessionsRouter
    .route('/')
    .post(
        [validate.username, validate.email, validate.password],
        catchErrors(login)
    );

export default sessionsRouter;