import * as dao from './dao.js';
export default function CommentRoutes(app) {
  // Get all comments
  app.get('/api/comments', async (req, res) => {
    const comments = await dao.findAllComments();
    res.send(comments);
  });

  // Get comment by id
  app.get('/api/comments/:commentId', async () => {
    const { commentId } = req.params;
    const comment = await dao.findComment(commentId);
    res.send(comment);
  });

  // Get comments for post
  app.get('/api/comments/post/:postId', async (req, res) => {
    const { postId } = req.params;
    const comments = await dao.findCommentsForPost(postId);
    res.send(comments);
  });

  // Get replies to comment
  app.get('/api/comments/replies/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const replies = await dao.findRepliesToComment(commentId);
    res.send(replies);
  });

  // Create comment
  app.post('/api/comments', async (req, res) => {
    const comment = req.body;
    const newComment = await dao.createComment(comment);
    res.json(newComment);
  });

  // Update comment
  app.put('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const commentUpdates = req.body;
    const status = await dao.updateComment(commentId, commentUpdates);
    res.send(status);
  });

  // Delete comment
  app.delete('/api/comment/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const status = await dao.deleteComment(commentId);
    res.send(status);
  });
}
