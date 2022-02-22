import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/http.filter';
import { FallBackExceptionFilter } from './filters/fallback.filter';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ValidationException } from './filters/validation.exception';
import { ValidationFilter } from './filters/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'error', 'warn', 'verbose'],
  });
  app.setGlobalPrefix('api');
  app.useGlobalFilters(
    new FallBackExceptionFilter(),
    new HttpExceptionFilter(),
    new ValidationFilter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map(
          (error) => `${error.property} has wrong value ${error.value},
           ${Object.values(error.constraints).join(', ')}`,
        );
        return new ValidationException(messages);
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Online Learning')
    .setDescription('NestJS Application for Online Education')
    .setVersion('1.0')
    .addTag('Course', 'Course end point and its related lessons')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
