import express, { Router } from 'express';

import feedbacksRouter from './controllers/feedbacks/feedbacks.router';

const router = express.Router();

router.use('/feedbacks', feedbacksRouter);

export default router;