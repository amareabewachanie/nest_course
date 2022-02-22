import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from '../models/course';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CoursesRepository {
  constructor(@InjectModel('Course') private courseModel: Model<Course>) {}
  async findAll(): Promise<Course[]> {
    return this.courseModel.find();
  }

  async updateCourse(courseId: string, changes: Course): Promise<Course> {
    return this.courseModel.findOneAndUpdate({ _id: courseId }, changes, {
      new: true,
      overwrite: true,
    });
  }

  findCourseById(courseId: string) {
    const course = this.courseModel.findById(courseId);
    if (!course) {
      throw new NotFoundException();
    }
    return course;
  }

  deleteCourse(courseId: string) {
    return this.courseModel.findByIdAndDelete(courseId);
  }

  addCourse(course: Course): Promise<Course> {
    return this.courseModel.create(course);
  }

  async findCourseByUrl(courseUrl: string): Promise<Course> {
    return this.courseModel.findOne({ url: courseUrl });
  }
}
