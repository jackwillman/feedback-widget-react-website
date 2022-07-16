import prisma from "../../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "./feedbacks.repository";

export const PrismaFeedbacksRepository = class implements FeedbacksRepository {
    async create ({ type, comment, screenshot } : FeedbackCreateData) {
        await prisma.feedback.create({
            data : {
                type,
                comment,
                screenshot
            }
        });
    };
};