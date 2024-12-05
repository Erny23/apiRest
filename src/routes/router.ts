import { Router } from "express";
import controller from "../controllers/controller";

const router = Router();

router.get("/", controller.test);

export default router;
