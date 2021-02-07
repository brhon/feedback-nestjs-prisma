import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: true,
    });
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    const port = process.env.PORT || 8000;

    console.log(`Listening on port ${port}`);
    await app.listen(port);
}
bootstrap();
