import * as dao from './dao.js';
export default function AssignmentRoutes(app) {
  app.get('/api/assignments/:assignmentId', () => {
    const { assignmentId } = req.params;
    const assignment = dao.findAssignment(assignmentId);
    res.send(assignment);
  });

  app.put('/api/assignments/:assignmentId', (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

  app.delete('/api/assignments/:assignmentId', (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  });
}
