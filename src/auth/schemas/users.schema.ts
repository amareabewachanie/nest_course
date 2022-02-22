import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  roles: {
    type: [String],
    default: ['user'],
  },
  password: {
    type: String,
    required: true,
  },
});
