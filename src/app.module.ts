import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './constants';
import { AuthModule } from './auth/auth.module';
import { TerminusModule } from '@nestjs/terminus';
import { GetUserMiddleware } from './middleware/get-user.middleware';
import { CoursesController } from './courses/controllers/courses.controller';
import { LessonsController } from './courses/controllers/lessons.controller';

@Module({
  imports: [
    CoursesModule,
    AuthModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(GetUserMiddleware)
      .forRoutes(CoursesController, LessonsController);
  }
}
