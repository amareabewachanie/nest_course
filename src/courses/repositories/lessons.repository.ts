import { Injectable } from '@nestjs/common';
import { Lesson } from '../models/lesson';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LessonsRepository {
  constructor(@InjectModel('Lesson') private lessonModel: Model<Lesson>) {}
  async search(
    courseId: string,
    sortOrder: string,
    pageNumber: number,
    pageSize: number,
  ): Promise<Lesson[]> {
    console.log(
      'Searching for lessons',
      courseId,
      sortOrder,
      pageNumber,
      pageSize,
    );
    return this.lessonModel.find({ course: courseId }, null, {
      limit: pageSize,
      skip: pageSize * pageNumber,
      sort: {
        seqNo: sortOrder,
      },
    });
  }

  async getAll(): Promise<Lesson[]> {
    return this.lessonModel.find();
  }
}
