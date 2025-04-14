import mongoose from 'mongoose';
const schema = new mongoose.Schema(
  {
    _id: String,
    available_at: String,
    due_date: String,
    points: Number,
    title: String,
    description: String,
    course: { type: String, ref: 'CourseModel' },
  },
  { collection: 'assignments' }
);
export default schema;
