import * as dao from './dao.js';
export default function FolderRoutes(app) {
  // Get all folders
  app.get('/api/folders', async (req, res) => {
    const folders = await dao.findAllFolders();
    res.send(folders);
  });

  // Get folder by id
  app.get('/api/folders/:folderId', async (req, res) => {
    const { folderId } = req.params;
    const folder = await dao.findFolderById(folderId);
    res.send(folder);
  });

  // Get folders for course
  app.get('/api/folders/course/:courseId', async (req, res) => {
    const { courseId } = req.params;
    const folders = await dao.findFoldersForCourse(courseId);
    res.send(folders);
  });

  // Create folder
  app.post('/api/folders', async (req, res) => {
    const folder = req.body;
    const newFolder = await dao.createFolder(folder);
    res.json(newFolder);
  });

  // Update folder
  app.put('/api/folders/:folderId', async (req, res) => {
    const { folderId } = req.params;
    const folderUpdates = req.body;
    const status = await dao.updateFolder(folderId, folderUpdates);
    res.send(status);
  });

  // Delete folder
  app.delete('/api/folders/:folderId', async (req, res) => {
    const { folderId } = req.params;
    const status = await dao.deleteFolder(folderId);
    res.send(status);
  });
}
