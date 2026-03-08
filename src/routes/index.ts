import express from "express";
import { getAPI } from "../controllers/index.js";

import taskRouter from "./TaskRoute.js"

const router = express.Router();

router.route("/").get(getAPI);      // main route
router.use("/task", taskRouter);    // task routes

export default router;