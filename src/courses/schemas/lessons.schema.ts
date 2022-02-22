import * as mongoose from 'mongoose';

export const lessonsSchema = new mongoose.Schema({
  description: String,
  SeqNo: Number,
  duration: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
});
