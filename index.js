import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import UserRoutes from './Kambaz/Users/routes.js';
import CourseRoutes from './Kambaz/Courses/routes.js';
import session from 'express-session';
import cors from 'cors';
import 'dotenv/config';
import ModuleRoutes from './Kambaz/Modules/routes.js';
import AssignmentRoutes from './Kambaz/Assignments/routes.js';
import CommentRoutes from './Kambaz/Pazza/Comments/routes.js';
import FolderRoutes from './Kambaz/Pazza/Folders/routes.js';
import PostRoutes from './Kambaz/Pazza/Posts/routes.js';
import mongoose from 'mongoose';

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || 'mongodb://192.168.1.185:27017/kambaz';
await mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || 'http://localhost:5173',
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'kambaz',
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
AssignmentRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
CommentRoutes(app);
FolderRoutes(app);
PostRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
