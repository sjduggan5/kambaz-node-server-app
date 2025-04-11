import model from './model.js';
import { v4 as uuidv4 } from 'uuid';

export function findAllFolders() {
  return model.find();
}

export function findFolderById(folderId) {
  return model.find(folderId);
}

export function findFoldersForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createFolder(folder) {
  const newFolder = { ...folder, _id: uuidv4() };
  return model.create(newFolder);
}

export function deleteFolder(folderId) {
  return model.deleteOne({ _id: folderId });
}

export function updateFolder(folderId, folderUpdates) {
  return model.updateOne({ _id: folderId }, { $set: folderUpdates });
}
