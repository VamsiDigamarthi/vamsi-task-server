import express from "express";
import {
  accessTeamBasedOnId,
  addAdminTaskToTeam,
  allTaskFeatc,
  getAllAdmin,
  getOneTeamLeader,
  userAccess,
  userAccessById,
} from "../Controlles/TeamLeaderController.js";

const router = express.Router();

router.post("/user", userAccess);
router.post("/allTaskFetch", allTaskFeatc);

// admin get one team leader

router.post("/oneteamleader", getOneTeamLeader);

// router.post("/getoneteam", getOneTeam)

// new add
// get all team based on ids admin

router.get("/usersbyid/:id", userAccessById);

// add task to teams

router.post("/addtasktoteam", addAdminTaskToTeam);

// access team based on id ==========================================================

router.get("/admin/team/:id", accessTeamBasedOnId);

router.post("/admin", getAllAdmin);

export default router;
