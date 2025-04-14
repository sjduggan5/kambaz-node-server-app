import model from './model.js';

export const findAssignment = (assignmentId) => model.findById(assignmentId);
export const findAssignmentsForCourse = (courseId) =>
  model.find({ course: courseId });
export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
};
export const updateAssignment = (assignmentId, assignmentUpdates) =>
  model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
export const deleteAssignment = (assignmentId) =>
  model.deleteOne({ _id: assignmentId });
