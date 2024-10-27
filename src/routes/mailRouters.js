import { Router } from "express";
import { mailController } from "../controllers/mailControllers.js";

const router = Router();

router.post("/mail", mailController);

export default router;
