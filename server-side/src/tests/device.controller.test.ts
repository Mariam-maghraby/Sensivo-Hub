import request from "supertest";
import express from "express";
import {
  get__devices,
  get__device_$id,
} from "../controllers/device.controller";
import * as deviceModel from "../models/Device";
import { validationResult } from "express-validator";

// Mock the model functions
jest.mock("../models/Device");

const app = express();
app.use(express.json());
app.get("/devices", get__devices);
app.get("/devices/:id", get__device_$id);

describe("Device Controller", () => {
  describe("GET /devices", () => {
    it("should return all devices", async () => {
      const mockDevices = [
        { id: "1", name: "Device A" },
        { id: "2", name: "Device B" },
      ];

      (deviceModel.findALlDevices as jest.Mock).mockResolvedValue(mockDevices);

      const res = await request(app).get("/devices");

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockDevices);
    });
  });

  describe("GET /devices/:id", () => {
    it("should return a single device by ID", async () => {
      const mockDevice = { id: "1", name: "Device A" };

      (deviceModel.findDeviceById as jest.Mock).mockResolvedValue(mockDevice);

      const res = await request(app).get("/devices/1");

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockDevice);
    });
  });
});
