import express from "express";
import { getAPI } from "../controllers/index.js";

import taskRouter from "./TaskRoutes.js"
import userRouter from "./UserRoutes.js"
import categoryRouter from "./CategoryRoutes.js"
import projectRouter from "./ProjectRoutes.js"

const router = express.Router();

router.route("/").get(getAPI);              // main route
router.use("/tasks", taskRouter);            // task routes
router.use("/users", userRouter);            // user routes
router.use("/categories", categoryRouter)     // category routes
router.use("/projects", projectRouter)       // project routes

export default router;