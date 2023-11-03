import prisma from "../../../prisma";
import { 
    FeedbackCreateData, 
    FeedbacksRepository
} from ".";

export const PrismaFeedbacksRepository = class implements FeedbacksRepository {
    async create ({ 
        type, 
        comment, 
        screenshot, 
        userId 
    } : FeedbackCreateData) {
        await prisma.feedback.create({
            data : {
                type,
                comment,
                screenshot,
                userId
            }
        });
    };

    async get(userId : string) {
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