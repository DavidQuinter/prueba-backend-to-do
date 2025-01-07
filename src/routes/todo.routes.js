import express from "express";
import {
  getTaskList,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/tasks", getTaskList);
router.post("/tasks", addTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);


export default router;
