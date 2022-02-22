import { Module } from '@nestjs/common';
import { CoursesController } from './controllers/courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { coursesSchema } from './schemas/courses.schema';
import { CoursesRepository } from './repositories/courses.repository';
import { lessonsSchema } from './schemas/lessons.schema';
import { LessonsController } from './controllers/lessons.controller';
import { LessonsRepository } from './repositories/lessons.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Course',
        schema: coursesSchema,
      },
      {
        name: 'Lesson',
        schema: lessonsSchema,
      },
    ]),
  ],
  controllers: [CoursesController, LessonsController],
  providers: [CoursesRepository, LessonsRepository],
})
export class CoursesModule {}
