import * as dao from './dao.js';
export default function AssignmentRoutes(app) {
  app.get('/api/assignments/:assignmentId', async () => {
    const { assignmentId } = req.params;
    const assignment = await dao.findAssignment(assignmentId);
    res.send(assignment);
  });

  app.put('/api/assignments/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

  app.delete('/api/assignments/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
  });
}
