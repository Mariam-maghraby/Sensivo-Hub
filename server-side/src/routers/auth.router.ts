import express from "express";
import {
  post__auth_login,
  post__auth_signup,
} from "../controllers/user.controller";
import {
  validateUser,
  validateUserCreate,
} from "../middleware/userValidation.middleware";

const router = express.Router();

router.post("/login", validateUser, post__auth_login);
router.post("/signup", validateUserCreate, post__auth_signup);

export default router;
