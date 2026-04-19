import express from 'express';

import {
  getAllUser,
  createUser,
  getUserByID,
  editUser,
  deleteUser,
} from '../controllers/UserController.js';

const router = express.Router();

router.route('/').get(getAllUser);
router.route('/').post(createUser);
router.route('/:id').get(getUserByID);
router.route('/:id').put(editUser);
router.route('/:id').delete(deleteUser);

export default router;
