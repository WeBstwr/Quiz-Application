import { Router } from "express";
import { registerAccount } from "../controllers/users.controllers.js";
import { validateUserInformation } from "../middlewares/users.middlewares.js";

const router = Router();

router.post("/register", validateUserInformation, registerAccount);

export default router;
