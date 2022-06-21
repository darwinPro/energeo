import { Router } from "express";
import fileUpload from "./fileUpload";

const router = Router();

router.use("/fileUpload", fileUpload);

export default router;
