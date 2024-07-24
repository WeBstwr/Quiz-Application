import { Router } from "express";
import { addQuestion } from "../controllers/questions.controllers.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const router = Router();

router.post("/", verifyAdmin, addQuestion);

export default router;
