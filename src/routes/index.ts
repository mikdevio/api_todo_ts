import express from "express";
import { getAPI } from "../controllers/index.js";

import taskRouter from "./TaskRoutes.js"
import userRouter from "./UserRoutes.js"

const router = express.Router();

router.route("/").get(getAPI);      // main route
router.use("/task", taskRouter);    // task routes
router.use("/user", userRouter);    // user routes

export default router;