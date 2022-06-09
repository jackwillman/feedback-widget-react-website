import express from 'express';

import feedbacksController from './controllers/feedbacks.controller';

const routes = express.Router();

routes.post('/feedbacks', feedbacksController.postFeedback);

export default routes;