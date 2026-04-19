import express from 'express';
import {
  createCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
  getCategoryByID,
} from '../controllers/CategoryController.js';

const router = express.Router();

router.route('/').get(getAllCategories);
router.route('/').post(createCategory);
router.route('/:id').get(getCategoryByID);
router.route('/:id').put(editCategory);
router.route('/:id').delete(deleteCategory);

export default router;
