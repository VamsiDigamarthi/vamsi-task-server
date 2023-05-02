import express from "express";
import {
  allTaskFeatc,
  userAccess,
} from "../Controlles/TeamLeaderController.js";

const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);

router.post("/user", userAccess);
router.post("/allTaskFetch", allTaskFeatc);
export default router;
