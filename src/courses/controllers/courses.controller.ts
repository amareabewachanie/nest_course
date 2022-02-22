import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Course } from '../models/course';
import { CoursesRepository } from '../repositories/courses.repository';

@Controller('courses')
export class CoursesController {
  constructor(private coursesDb: CoursesRepository) {}
  @Get('')
  async findAllCourses(): Promise<Course[]> {
    return this.coursesDb.findAll();
  }
  @Put(':courseId')
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() changes: Course,
  ): Promise<Course> {
    if (changes._id) {
      throw new BadRequestException("Can't update course Id");
    }
    return this.coursesDb.updateCourse(courseId, changes);
  }
  // @Get('/:courseId')
  // async findCourse(@Param('courseId') courseId: string): Promise<Course> {
  //   return this.coursesDb.findCourseById(courseId);
  // }
  @Get('/:courseUrl')
  async findCourseByUrl(
    @Param('courseUrl') courseUrl: string,
  ): Promise<Course> {
    console.log('Finding cours by url ', courseUrl);
    const course = await this.coursesDb.findCourseByUrl(courseUrl);
    if (!course) {
      throw new NotFoundException(
        "Couldn't found a course with url " + courseUrl,
      );
    }
    return course;
  }
  @Delete(':courseId')
  async deleteCourse(@Param('courseId') courseId: string) {
    return this.coursesDb.deleteCourse(courseId);
  }
  @Post('')
  async addCourse(@Body() course: Course): Promise<Course> {
    console.log('Creating Course');
    return this.coursesDb.addCourse(course);
  }
}
