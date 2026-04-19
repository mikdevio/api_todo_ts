import express from 'express';

import {
  getAllTask,
  createTask,
  getTaskByID,
  editTask,
  deleteTask,
} from '../controllers/TaskController.js';

const router = express.Router();

router.route('/').get(getAllTask);
router.route('/').post(createTask);
router.route('/:id').get(getTaskByID);
router.route('/:id').put(editTask);
router.route('/:id').delete(deleteTask);

export default router;
