
import { Router } from "express";
import helloWorldRoutes from '../modules/HelloWorld/routes/HelloWorldRoutes'

const router = Router();
router.use(helloWorldRoutes);

export default router;
