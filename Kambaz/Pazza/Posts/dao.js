import model from './model.js';
import { v4 as uuidv4 } from 'uuid';

export function findAllPosts() {
  return model.find();
}

export function findPost(postId) {
  return model.find(postId);
}

export function findPostsForUser(userId) {
  return model.find({ user: userId });
}

export function findPostsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function findPostsForFolder(folderId) {
  return model.find({ folder: folderId });
}

export function createPost(post) {
  const newPost = { ...post, _id: uuidv4() };
  return model.create(newPost);
}

export function deletePost(postId) {
  return model.deleteOne({ _id: postId });
}

export function updatePost(postId, postUpdates) {
  return model.updateOne({ _id: postId }, { $set: postUpdates });
}
