import express from 'express';

import { catchErrors } from '../../middlewares';
import { sanitize } from './feedbacks.middlewares';
import { postFeedback } from './feedbacks.controller';

const feedbacksRouter = express.Router();

feedbacksRouter
    .route('/')
    .post(
        [sanitize.type, sanitize.comment],
        catchErrors(postFeedback)
    );

export default feedbacksRouter;