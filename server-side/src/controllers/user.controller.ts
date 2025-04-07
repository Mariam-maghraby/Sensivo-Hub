import { Request, Response, NextFunction } from "express";
import { generateAccessToken } from "../utils/tokenUtils";
import bcrypt from "bcrypt";
import { findUserByUsername, User } from "../models/User";
import { verifyPassword } from "../utils/passwordUtils";
import { validationResult } from "express-validator";

export const post__auth_login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    const user = findUserByUsername(username);

    if (user) {
      const isPasswordMatch = await verifyPassword(password, user.password);
      if (isPasswordMatch) {
        const token = generateAccessToken({
          username: req.body.username,
          role: user.role,
        });
        res.json(token);
      } else {
        res.status(401).json("Invalid username or password");
      }
    } else {
      res.status(401).json("Invalid username or password");
    }
  } catch (err) {
    next(err);
  }
};

export const post__auth_signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { username, password, email, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // const user = new User("3", username, email, hashedPassword, role);
    const token = generateAccessToken({
      username: req.body.username,
      role: req.body.role,
    });
    res.json(token);
  } catch (err) {
    next(err);
  }
};
