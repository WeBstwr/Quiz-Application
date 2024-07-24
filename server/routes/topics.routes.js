import { Router } from "express";
import { getTopics, createTopic } from "../controllers/topics.controllers.js";

const router = Router();

router.get("/", getTopics);
router.post("/", createTopic);

export default router;
