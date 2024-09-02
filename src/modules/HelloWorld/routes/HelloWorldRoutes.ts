import { Router } from "express";
import { HelloWorldController } from "../controllers/HelloWorldController";
import { HelloWorldService } from "../services/HelloWorldService";

const router = Router();

const helloWorldService = new HelloWorldService();
const helloWorldController = new HelloWorldController(helloWorldService);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna uma mensagem Hello World
 *     responses:
 *       200:
 *         description: Sucesso
 */

router.get("/", (req, res) => helloWorldController.sendHelloWorld(req, res));

export default router;
