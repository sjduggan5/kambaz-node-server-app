import e from 'cors';
import model from './model.js';
import { v4 as uuidv4 } from 'uuid';

export function findAllViews() {
  return model.find();
}

export function findViewsForPost(postId) {
  return model.find({ post: postId });
}

export function findViewsForUser(userId) {
  return model.find({ user: userId });
}

export function CreateView(view) {
  const newView = { ...view, _id: uuidv4() };
  return model.create(newView);
}

export function deleteView(viewId) {
  return model.deleteOne({ _id: viewId });
}
