import * as dao from './dao.js';
export default function EnrollmentsRoutes(app) {
  app.get('/api/enrollments', (req, res) => {
    const enrollments = dao.fetchEnrollments();
    res.send(enrollments);
  });
  app.post('/api/enrollments/:userId/:courseId', (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });
  app.delete('/api/enrollments/:userId/:courseId', (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.unenrollUserInCourse(userId, courseId);
    res.send(status);
  });
}
