import { Router } from "express";
import {
  addQuestion,
  getQuestionsByTopicId,
} from "../controllers/questions.controllers.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const router = Router();

router.post("/", verifyAdmin, addQuestion);
router.get("/:topicId/questions", getQuestionsByTopicId);

export default router;
