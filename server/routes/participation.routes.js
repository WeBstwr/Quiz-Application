import { Router } from "express";
import {
  addParticipation,
  getParticipationByStudentId,
  getParticipationByTopicId,
} from "../controllers/participation.controllers.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post("/", verifyToken, addParticipation);
router.get("/student", verifyToken, getParticipationByStudentId);
router.get("/topic/:topicId", verifyToken, getParticipationByTopicId);

export default router;
