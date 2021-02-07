import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
    imports: [FeedbackModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
