import express from 'express';

import { catchErrors } from '../../middlewares';

import { login } from './sessions.controller';

const sessionsRouter = express.Router();

sessionsRouter
    .route('/')
    .post(catchErrors(login));

export default sessionsRouter;