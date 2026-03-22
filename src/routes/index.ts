import express from "express";
import { getAPI } from "../controllers/index.js";

import taskRouter from "./TaskRoutes.js"
import userRouter from "./UserRoutes.js"
import categoryRouter from "./CategoryRoutes.js"
import projectRouter from "./ProjectRoutes.js"

const router = express.Router();

router.route("/").get(getAPI);              // main route
router.use("/task", taskRouter);            // task routes
router.use("/user", userRouter);            // user routes
router.use("/category", categoryRouter)     // category routes
router.use("/project", projectRouter)       // project routes

export default router;