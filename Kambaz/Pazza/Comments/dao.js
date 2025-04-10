import model from './model.js';
import { v4 as uuidv4 } from 'uuid';

export function findAllComments() {
  return model.find();
}

export function findComment(commentId) {
  return model.find(commentId);
}

export function findCommentsForPost(postId) {
  return model.find({ post: postId });
}

export function findRepliesToComment(commentId) {
  return model.find({ parentComment: commentId });
}

export function createComment(comment) {
  const newComment = { ...comment, _id: uuidv4() };
  return model.create(newComment);
}

export function deleteComment(commentId) {
  return model.deleteOne({ _id: commentId });
}

export function updateComment(commentId, commentUpdates) {
  return model.updateOne({ _id: commentId }, { $set: commentUpdates });
}
