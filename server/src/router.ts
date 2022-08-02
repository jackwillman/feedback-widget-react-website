import express, { Router } from 'express';

import usersRouter from './resources/users/users.router';
import sessionsRouter from './resources/sessions/sessions.router';
import feedbacksRouter from './resources/feedbacks/feedbacks.router';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter)
router.use('/feedbacks', feedbacksRouter);

export default router;