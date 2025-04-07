import { body } from "express-validator";

export const validateUserCreate = [
  body("email")
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required")
    .normalizeEmail({ all_lowercase: true }), //to lowercase all emails by default
  body("username")
    .isString()
    .withMessage("Username must be a string")
    .notEmpty()
    .withMessage("Username is required"),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .isString()
    .withMessage("Role must be a string")
    .notEmpty()
    .withMessage("Role is required"),
];

export const validateUser = [
  body("email").notEmpty().isEmail().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];
