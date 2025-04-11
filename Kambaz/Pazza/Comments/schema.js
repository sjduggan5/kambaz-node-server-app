import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema(
  {
    _id: String,
    author: { type: String, ref: 'UserModel' },
    authorName: String,
    authorType: {
      type: String,
      enum: ['STUDENT', 'INSTRUCTOR'],
      default: 'STUDENT',
    },
    createDate: Date,
    content: String,
    commentType: {
      type: String,
      enum: ['COMMENT', 'ANSWER'],
      default: 'COMMENT',
    },
    post: { type: String, ref: 'PostModel' },
    parentComment: { type: String, ref: 'CommentModel' },
    resolved: Boolean,
  },
  { collection: 'comments' }
);
export default commentSchema;
