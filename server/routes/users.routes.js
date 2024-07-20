import { Router } from "express";
import { registerAccount } from "../controllers/users.controllers.js";

const router = Router();

router.post("/", registerAccount);

export default router;
