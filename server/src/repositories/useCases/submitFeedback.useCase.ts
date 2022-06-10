import { MailAdapter } from '../../adapters/mail.adapter';
import { FeedbacksRepository } from '../feedbacks.repository';

interface SubmitFeedbackUseCaseRequest {
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

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        });

        await this.mailAdapter.sendMail({
            subject : 'Novo Feedback',
            body : [
                `<div style="font-family: sans-serif; font size: 16 px; color: #111;">`,
                `<p><strong>Tipo do feedback:</strong> ${type}</p>`,
                `<p><strong>Comentário:</strong> ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" alt="Feedback Screenshot" style="vertical-align:middle;margin:12px 30px"/>` : '',
                `</div/>`
            ].join('\n')
        });
    };
};