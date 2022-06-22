import { SubmitFeedbackUseCase } from ".";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create : createFeedbackSpy },
    { sendMail : sendMailSpy }
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'example comment',
            screenshot : 'data:image/png;base64aigthrweiugh9eharu9gerh',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should be able to submit a feedback without a screenshot', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'example comment',
            screenshot : '',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type : '',
            comment : 'example comment',
            screenshot : 'data:image/png;base64aigthrweiugh9eharu9gerh',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : '',
            screenshot : 'data:image/png;base64aigthrweiugh9eharu9gerh',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'ta tudo bugado',
            screenshot : 'test.png',
        })).rejects.toThrow();
    });
});