import mongoose from 'mongoose';
const viewSchema = new mongoose.Schema(
  {
    _id: String,
    user: { type: String, ref: 'UserModel' },
    post: { type: String, ref: 'PostModel' },
  },
  { collection: 'views' }
);
export default viewSchema;
