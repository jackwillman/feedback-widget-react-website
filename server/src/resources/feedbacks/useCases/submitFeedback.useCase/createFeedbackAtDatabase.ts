import { SubmitFeedbackUseCaseRequest } from '.';
import { FeedbacksRepository } from '../../repositories/feedbacks.repository';

const createFeedbackAtDatabase = async function (
    {
        type,
        comment,
        screenshot
    } : SubmitFeedbackUseCaseRequest,
    feedbacksRepository : FeedbacksRepository
) {
    await feedbacksRepository.create({
        type,
        comment,
        screenshot
    });
};

export default createFeedbackAtDatabase;