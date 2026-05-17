import express from 'express';
import { getAPI } from '@/controllers/index.js';

import taskRouter from '@/routes/task-routes';
import userRouter from '@/routes/user-routes';
import categoryRouter from '@/routes/category-routes';
import projectRouter from '@/routes/project-routes';

const router = express.Router();

router.route('/').get(getAPI); // main route
router.use('/tasks', taskRouter); // task routes
router.use('/users', userRouter); // user routes
router.use('/categories', categoryRouter); // category routes
router.use('/projects', projectRouter); // project routes

export default router;
