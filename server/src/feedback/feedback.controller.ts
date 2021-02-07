import {
    Controller,
    Get,
    Post,
    Body,
    HttpCode,
    Res,
    HttpStatus,
    Param,
    Delete,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from '@prisma/client';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Response } from 'express';

class FeedbackValidator {
    @IsNotEmpty()
    feedback: string;

    @IsNotEmpty()
    author: string;
}

class IDValidator {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}

    @Get('all')
    async all(): Promise<Feedback[] | null> {
        const feedback: Feedback[] = await this.feedbackService.getAllFeedbacks();
        return feedback;
    }

    @Post('create')
    async create(@Body() data: FeedbackValidator, @Res() res: Response) {
        const feedback = {
            feedback: data.feedback,
            author: data.author,
        };

        await this.feedbackService.createNewFeedback(feedback);
        res.status(HttpStatus.CREATED).json();
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number, @Res() res: Response) {
        await this.feedbackService.deleteFeedback(Number(id));
        res.status(HttpStatus.OK).json();
    }

    @Delete('delete/all')
    async deleteAll(@Res() res: Response) {
        this.feedbackService.deleteAllFeedbacks();
        res.status(HttpStatus.OK).json();
    }
}
