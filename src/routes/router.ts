import { Router } from "express";
import bodyParser from "body-parser";
import * as controllers from "../controllers/index";

const router = Router();

router.get("/", controllers.test);

router.post("/send", bodyParser.json(), controllers.mail);

// Rutas test
// router.get("/smtp", controllers.smtp);
// router.post("/testsend", bodyParser.json(), controllers.mailer);

export default router;
