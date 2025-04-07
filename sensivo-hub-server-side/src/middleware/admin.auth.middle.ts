import { Request, Response, NextFunction } from "express";
import { ROLES } from "../utils/rolesUtils";

export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user } = req;
    if (user!.role !== ROLES.ADMIN) {
      res.status(403).json({ message: "Forbidden" });
    }
    next();
  } catch (err) {
    next(err);
  }
};
