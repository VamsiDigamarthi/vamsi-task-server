import express from "express";
import {
  addTask,
  deleteTask,
  editTask,
  employeeTaskGet,
  employeeTaskGetBasedOnId,
  newAdmingetTeamLeaderTask,
} from "../Controlles/TaskController.js";

const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);

router.post("/employee", employeeTaskGet);
router.post("/addtaks", addTask);
router.put("/:id", editTask);

router.get("/teamtask/:id", employeeTaskGetBasedOnId);

router.delete("/delete/:id", deleteTask);

//
//
//
// get team leader task based on there username or email
router.post("/teamleader/task", newAdmingetTeamLeaderTask);

export default router;
