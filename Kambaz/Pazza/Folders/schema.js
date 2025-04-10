import mongoose from 'mongoose';
const schema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    course: { type: String, ref: 'CourseModel' },
  },
  { collection: 'folders' }
);
export default schema;
