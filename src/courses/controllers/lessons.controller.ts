import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Lesson } from '../models/lesson';
import { LessonsRepository } from '../repositories/lessons.repository';
import { AuthenticationGurad } from '../../guards/authentication.gurad';
import { AdminGuard } from '../../guards/admin.guard';

@Controller('lessons')
@UseGuards(AuthenticationGurad)
export class LessonsController {
  constructor(private lessonDb: LessonsRepository) {}
  @Get('')
  @UseGuards(AdminGuard)
  getAllLessons(): Promise<Lesson[]> {
    return this.lessonDb.getAll();
  }
  @Get(':courseId')
  searchLesson(
    @Param('courseId') courseId: string,
    @Query('sortOrder') sortOrder = 'acs',
    @Query('pageNumber', ParseIntPipe) pageNumber = 0,
    @Query('pageSize', ParseIntPipe) pageSize = 5,
  ): Promise<Lesson[]> {
    if (!courseId) {
      throw new BadRequestException('CourseId must be defined');
    }
    if (sortOrder != 'asc' && sortOrder != 'dsc') {
      throw new BadRequestException('Sort order should be either asc or dsc');
    }
    return this.lessonDb.search(courseId, sortOrder, pageNumber, pageSize);
  }
}
