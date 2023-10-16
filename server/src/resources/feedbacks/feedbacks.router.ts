import express from 'express';

import { 
    catchErrors,
    catchMiddlewareErrors,
    CheckJwtAuthorization
} from '../../middlewares';
import { sanitize } from './feedbacks.middlewares';

import { JwtSimpleJwtAdapter } from '../../adapters/jsonWebToken/jwtSimple';

import { 
    getFeedbacks, 
    postFeedback 
} from './feedbacks.controller';

const jwtSimpleAdapter = new JwtSimpleJwtAdapter();
const authMiddleware = new CheckJwtAuthorization(jwtSimpleAdapter);

const feedbacksRouter = express.Router();

feedbacksRouter
    .route('/')
    .post(
        [sanitize.type, sanitize.comment],
        catchErrors(postFeedback)
    );

feedbacksRouter
    .route('/auth/')
    .get(
        catchMiddlewareErrors(authMiddleware.execute),
        catchErrors(getFeedbacks)
    ).post(
        catchMiddlewareErrors(authMiddleware.execute),
        [sanitize.type, sanitize.comment],
        catchErrors(postFeedback)
    );

export default feedbacksRouter;