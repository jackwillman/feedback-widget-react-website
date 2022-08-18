import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { httpError, checkAuth } from '../../helpers';

import { NodemailerMailAdapter } from '../../adapters/mail/nodemailer';
import { PrismaFeedbacksRepository } from './repositories/prisma';

import { SubmitFeedbackUseCase, SubmitFeedbackUseCaseRequest } from './useCases/submitFeedback';
import { GetFeedbacksUseCase } from './useCases/getFeedbacks';

export const getFeedbacks = async function getFeedbacksController(
    req : Request, 
    res : Response
) {   
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

    const getFeedbacksUseCase = new GetFeedbacksUseCase(
        prismaFeedbacksRepository,
    );

    const userId = req.query.id;
    if (!userId || typeof userId !== 'string') {
        throw httpError(400, 'User ID is not a string');
    }
    checkAuth(res, userId);

    const feedbackList = await getFeedbacksUseCase.execute({ userId });

    res.status(200).json(feedbackList);
};

export const postFeedback = async function postFeedbackController(
    req : Request, 
    res : Response
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors : errors.array() });
    }
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    );

    const { type, comment, screenshot } = req.body;
    const userId = req.query.id;

    const dataToSubmit : SubmitFeedbackUseCaseRequest = {
        type,
        comment,
        screenshot,
        userId : null
    };

    if (userId) {
        if (typeof userId !== 'string') {
            throw httpError(400, 'User ID is not a string');
        }
        checkAuth(res, userId);
        
        dataToSubmit.userId = userId;
    }

    await submitFeedbackUseCase.execute(dataToSubmit);

    res.status(201).send();
};