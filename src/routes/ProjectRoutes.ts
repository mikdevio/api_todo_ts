import express from 'express';
import {
    createProject, deleteProject,
    editProject, getAllProjects,
    getProjectByID
} from '../controllers/ProjectController.js';


const router = express.Router();

router.route("/").get(getAllProjects);
router.route("/").post(createProject);
router.route("/:id").get(getProjectByID);
router.route("/:id").put(editProject)
router.route("/:id").delete(deleteProject)

export default router;