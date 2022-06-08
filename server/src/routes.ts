import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer.mail.adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma.feedbacks.repository';
import { SubmitFeedbackUseCase } from './repositories/useCases/submitFeedback.useCase';

const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    try {
        const { type, comment, screenshot } = req.body;
        
        const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
        const nodemailerMailAdapter = new NodemailerMailAdapter();

        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbacksRepository,
            nodemailerMailAdapter
        );

        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot
        });

        return res.status(201).send();
    } catch (err) {
        return res.status(500).send(`${err}`);
    }
});

export default routes;