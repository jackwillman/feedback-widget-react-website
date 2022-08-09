import { httpError } from '../../../helpers';

import { FeedbacksRepository } from '../repositories';

export interface GetFeedbacksUseCaseRequest {
    userId : string;
};

export const GetFeedbacksUseCase = class {
    constructor (
        private feedbacksRepository : FeedbacksRepository
    ) {};

    async execute ({ userId } : GetFeedbacksUseCaseRequest) {

        if (!userId) {
            throw httpError(400, 'User ID is required!');
        }

        const feedbackList = await this.feedbacksRepository.get(userId);
        return feedbackList;
    };
};