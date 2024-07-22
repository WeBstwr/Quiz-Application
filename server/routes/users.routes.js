import { Router } from "express";
import {
  registerAccount,
  getAllStudents,
  getAllUnApprovedStudents,
  approveUser,
} from "../controllers/users.controllers.js";
import { validateUserInformation } from "../middlewares/users.middlewares.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const router = Router();

router.post("/register", validateUserInformation, registerAccount);
router.get("/students", verifyAdmin, getAllStudents);
router.get("/unapproved", verifyAdmin, getAllUnApprovedStudents);
router.patch("/approve/:id", verifyAdmin, approveUser);

export default router;
