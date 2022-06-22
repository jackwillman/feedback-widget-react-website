import express, { Router } from 'express';

import usersRouter from './resources/users/users.router';
import feedbacksRouter from './resources/feedbacks/feedbacks.router';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/feedbacks', feedbacksRouter);

export default router;