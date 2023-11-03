import { httpError } from '../../../helpers';

import { MailAdapter } from '../../../adapters/mail';
import { FeedbacksRepository } from '../repositories';

export interface SubmitFeedbackUseCaseRequest {
    type : string;
    comment : string;
    screenshot: string | null;
    userId : string | null;
};

export const SubmitFeedbackUseCase = class {
    constructor (
        private feedbacksRepository : FeedbacksRepository,
        private mailAdapter : MailAdapter
    ) {};

    private mailContent ({ type, comment, screenshot } : SubmitFeedbackUseCaseRequest) {
        return {
            subject : 'Novo Feedback',
            body : [
                `<div style="font-family: sans-serif; font size: 16 px; color: #111;">`,
                `<p><strong>Tipo do feedback:</strong> ${type}</p>`,
                `<p><strong>Comentário:</strong> ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" alt="Feedback Screenshot" style="vertical-align:middle;margin:12px 30px"/>` : '',
                `</div/>`
            ].join('\n')
        };
    };

    async execute ({
        type, 
        comment, 
        screenshot, 
        userId 
    } : SubmitFeedbackUseCaseRequest) {

        if (!type) {
            throw httpError(400, 'Type is required');
        }

        if (!comment) {
            throw httpError(400, 'Comment is required');
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw httpError(415, 'Invalid screenshot format');
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
            userId
        });

        await this.mailAdapter.sendMail(
            this.mailContent({ 
                type, 
                comment, 
                screenshot, 
                userId 
            })
        );
    };
};