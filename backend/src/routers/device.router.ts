import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  get__devices,
  get__device_$id,
} from "../controllers/device.controller";
import {
  validateId,

} from "../middleware/deviceValidation.middle";
import { adminMiddleware } from "../middleware/admin.auth.middle";

const router = express.Router();

router.use(authMiddleware);
router.get("/", get__devices);

router.use(adminMiddleware);
router.get("/:id", validateId, get__device_$id);

export default router;
