import express from 'express';

import { getAllTask, createTask, getTaskByID } from '../controllers/task.js';

const router = express.Router();

router.route("/").get(getAllTask);
router.route("/").post(createTask);
router.route("/:id").get(getTaskByID);

export default router;