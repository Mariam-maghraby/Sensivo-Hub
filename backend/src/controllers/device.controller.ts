import { Request, Response, NextFunction } from "express";
import { findALlDevices, findDeviceById } from "../models/Device";
import { validationResult } from "express-validator";

export const get__devices = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const devices = await findALlDevices();
    res.status(200).json(devices);
  } catch (err) {
    next(err);
  }
};

export const get__device_$id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const device = await findDeviceById(id);
    res.status(200).json(device);
  } catch (err) {
    next(err);
  }
};
