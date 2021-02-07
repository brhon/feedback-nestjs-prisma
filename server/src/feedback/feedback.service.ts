import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Feedback } from '@prisma/client';

@Injectable()
export class FeedbackService {
    constructor(private prisma: PrismaService) {}

    async getAllFeedbacks(): Promise<Feedback[] | null> {
        const feedbacks = await this.prisma.feedback.findMany();
        return feedbacks;
    }

    async createNewFeedback(feedback: Prisma.FeedbackCreateInput) {
        return await this.prisma.feedback.create({
            data: {
                feedback: feedback.feedback,
                author: feedback.author,
            },
        });
    }

    async deleteFeedback(id: number) {
        return this.prisma.feedback.delete({
            where: {
                id: id,
            },
        });
    }

    async deleteAllFeedbacks() {
        return this.prisma.feedback.deleteMany();
    }
}
