import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { NodemailerMailAdapter } from './adapters/nodemailer.mail.adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma.feedbacks.repository';
import { SubmitFeedbackUseCase } from './useCases/submitFeedback.useCase';

const postFeedback = async function postFeedbackController(
    req : Request, 
    res : Response
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors : errors.array() });
        return;
    }

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

    res.status(201).send();
    return;
};

export default {
    postFeedback
};