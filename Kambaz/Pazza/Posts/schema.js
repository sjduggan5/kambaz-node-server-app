import mongoose from 'mongoose';
const postSchema = new mongoose.Schema(
  {
    _id: String,
    author: { type: String, ref: 'UserModel' },
    authorName: String,
    authorType: {
      type: String,
      enum: ['STUDENT', 'INSTRUCTOR'],
      default: 'STUDENT',
    },
    views: Number,
    createDate: Date,
    course: { type: String, ref: 'CourseModel' },
    folder: { type: String, ref: 'FolderModel' },
    title: String,
    content: String,
    visibility: {
      type: String,
      enum: ['PUBLIC', 'PRIVATE'],
      default: 'PUBLIC',
    },
    userIds: [{ type: String, ref: 'UserModel' }],
    status: {
      type: String,
      enum: ['UNANSWERED', 'ANSWERED'],
      default: 'UNANSWERED',
    },
    postType: {
      type: String,
      enum: ['QUESTION', 'NOTE'],
      default: 'QUESTION',
    },
  },
  { collection: 'posts' }
);
export default postSchema;
