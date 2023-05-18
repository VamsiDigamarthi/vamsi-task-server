import express from "express";
import {
  deleteUser,
  loginUser,
  registerUser,
} from "../Controlles/AuthController.js";
//import uploadMiddleware from "../middlewares/multermiddleware.js";

const router = express.Router();

router.post("/register", registerUser); // uploadMiddleware.single("profilePic"),
router.post("/login", loginUser);

// delete user

router.post("/delete/user", deleteUser);

export default router;
