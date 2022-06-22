import express from 'express';

import { catchErrors } from '../../middlewares';
import { sanitize } from './feedbacks.middlewares';
import feedbacksController from './feedbacks.controller';

const feedbacksRouter = express.Router();

feedbacksRouter
    .route('/')
    .post(
        [sanitize.type, sanitize.comment],
        catchErrors(feedbacksController.postFeedback)
    );

export default feedbacksRouter;