import express from 'express';

import { getAllUser, createUser, getUserByID } from '../controllers/UserController.js';

const router = express.Router();

router.route("/").get(getAllUser);
router.route("/").post(createUser);
router.route("/:id").get(getUserByID);

export default router;