import * as mongoose from 'mongoose';

export const coursesSchema = new mongoose.Schema({
  seqNum: {
    type: Number,
    required: true,
  },
  url: String,
  iconUrl: String,
  courseListIcon: String,
  description: String,
  longDescription: String,
  category: String,
  lessonsCount: String,
  promo: Boolean,
});
