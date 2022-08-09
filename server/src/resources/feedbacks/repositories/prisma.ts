import prisma from "../../../prisma";
import { UserId, FeedbackCreateData, FeedbacksRepository, Feedback } from ".";

export const PrismaFeedbacksRepository = class implements FeedbacksRepository {
    async create ({ type, comment, screenshot, userId } : FeedbackCreateData) {
        await prisma.feedback.create({
            data : {
                type,
                comment,
                screenshot,
                userId
            }
        });
    };

    async get(userId : UserId) {
        const feedbackList = await prisma.feedback.findMany({
            where : {
                userId : {
                    equals : userId
                }
            }
        });
        return feedbackList;
    };
};