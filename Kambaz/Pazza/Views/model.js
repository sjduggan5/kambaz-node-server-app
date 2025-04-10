import mongoose from 'mongoose';
import schema from './schema.js';
const model = mongoose.model('ViewModel', schema);
export default model;
