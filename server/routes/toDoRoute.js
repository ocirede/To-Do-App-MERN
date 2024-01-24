import express from "express";
import { createTask, getAllTasks,updateTask, deleteTask } from "../Controllers/toDosController.js";

const router = express.Router();

router.post("/add", createTask)
router.get("/get", getAllTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:taskId", deleteTask)

export default router;