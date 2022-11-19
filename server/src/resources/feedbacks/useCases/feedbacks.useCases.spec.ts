import { SubmitFeedbackUseCase } from "./submitFeedback";
import { GetFeedbacksUseCase } from "./getFeedbacks";

const feedbacksRepositorySpy = {
    create : jest.fn(),
    get : jest.fn()
};
const mailAdapterSpy = {
    sendMail : jest.fn()
};


const submitFeedback = new SubmitFeedbackUseCase(
    feedbacksRepositorySpy,
    mailAdapterSpy
);

const getFeedbacks = new GetFeedbacksUseCase(
    feedbacksRepositorySpy
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback with a screenshot', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'example comment',
            screenshot : 'data:image/png;base64aigthrweiugh9eharu9gerh',
            userId : null
        })).resolves.not.toThrow();

        expect(feedbacksRepositorySpy.create).toHaveBeenCalled();
        expect(mailAdapterSpy.sendMail).toHaveBeenCalled();
    });

    it('should be able to submit a feedback without a screenshot', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'example comment',
            screenshot : '',
            userId : null
        })).resolves.not.toThrow();

        expect(feedbacksRepositorySpy.create).toHaveBeenCalled();
        expect(mailAdapterSpy.sendMail).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type : '',
            comment : 'example comment',
            screenshot : 'data:image/png;base64aigthrweiugh9eharu9gerh',
            userId : null
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : '',
            screenshot : 'data:image/png;base64aigthrweiugh9eharu9gerh',
            userId : null
        })).rejects.toThrow();
    });
    
    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'ta tudo bugado',
            screenshot : 'test.png',
            userId : null
        })).rejects.toThrow();
    });
});

describe('Get feedbacks', () => {
    it('should be able to get feedbacks', async () => {
        await expect(getFeedbacks.execute({
            userId : 'joaozinho'
        })).resolves.not.toThrow();

        expect(feedbacksRepositorySpy.get).toHaveBeenCalled();
    });

    it('should not be able to get feedbacks without user ID', async () => {
        await expect(getFeedbacks.execute({
            userId : ''
        })).rejects.toThrow();
    });
});