import express from "express";
import {
  addTask,
  editTask,
  employeeTaskGet,
} from "../Controlles/TaskController.js";

const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);

router.post("/employee", employeeTaskGet);
router.post("/addtaks", addTask);
router.put("/:id", editTask);
export default router;
