import * as dao from './dao.js';
export default function PostRoutes(app) {
  // Get all posts
  app.get('/api/posts', async (req, res) => {
    const posts = await dao.findAllPosts();
    res.send(posts);
  });

  // Get post by id
  app.get('/api/posts/:postId', async () => {
    const { postId } = req.params;
    const post = await dao.findPost(postId);
    res.send(post);
  });

  // Get posts for user
  app.get('/api/posts/user/:userId', async (req, res) => {
    const { userId } = req.params;
    const posts = await dao.findPostsForUser(userId);
    res.send(posts);
  });

  // Get posts for course
  app.get('/api/posts/course/:courseId', async (req, res) => {
    const { courseId } = req.params;
    const posts = await dao.findPostsForCourse(courseId);
    res.send(posts);
  });

  // Get posts for a user in a course
  app.get('/api/posts/user/:userId/course/:courseId', async (req, res) => {
    const { userId, courseId } = req.params;
    const posts = await dao.findPostsForUserAndCourse(userId, courseId);
    res.send(posts);
  });

  // Get posts for folder
  app.get('/api/posts/folder/:folderId', async (req, res) => {
    const { folderId } = req.params;
    const posts = await dao.findPostsForFolder(folderId);
    res.send(posts);
  });

  // Create post
  app.post('/api/posts', async (req, res) => {
    const post = req.body;
    const newPost = await dao.createPost(post);
    res.json(newPost);
  });

  // Update post
  app.put('/api/posts/:postId', async (req, res) => {
    const { postId } = req.params;
    const postUpdates = req.body;
    const status = await dao.updatePost(postId, postUpdates);
    res.send(status);
  });

  // Delete post
  app.delete('/api/post/:postId', async (req, res) => {
    const { postId } = req.params;
    const status = await dao.deletePost(postId);
    res.send(status);
  });
}
