import { MailAdapter } from '../../adapters/mail.adapter';
import { FeedbacksRepository } from '../../repositories/feedbacks.repository';
import createFeedbackAtDatabase from './createFeedbackAtDatabase';
import sendFeedbackByMail from './sendFeedbackByMail';

export interface SubmitFeedbackUseCaseRequest {
    type : string;
    comment : string;
    screenshot?: string;
};

export const SubmitFeedbackUseCase = class {
    constructor (
        private feedbacksRepository : FeedbacksRepository,
        private mailAdapter : MailAdapter
    ) {};

    async execute(request : SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (!type) {
            throw new Error('Type is required');
        }

        if (!comment) {
            throw new Error('Comment is required');
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format');
        }

        await createFeedbackAtDatabase({ type, comment, screenshot }, this.feedbacksRepository);
        await sendFeedbackByMail({ type, comment, screenshot }, this.mailAdapter);
    };
};