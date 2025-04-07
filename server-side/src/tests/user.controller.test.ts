import request from "supertest";
import express from "express";
import { post__auth_login, post__auth_signup } from "../controllers/user.controller";
import * as tokenUtils from "../utils/tokenUtils";
import * as passwordUtils from "../utils/passwordUtils";
import * as userModel from "../models/User";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.post("/login", post__auth_login);
app.post("/signup", post__auth_signup);

jest.mock("../utils/tokenUtils");
jest.mock("../utils/passwordUtils");
jest.mock("../models/User");
jest.mock("bcrypt");

describe("Auth Controller", () => {
  describe("POST /login", () => {
    it("should return token on valid login", async () => {
      const mockUser = {
        username: "john",
        password: "hashedpass",
        role: "user",
      };

      (userModel.findUserByUsername as jest.Mock).mockReturnValue(mockUser);
      (passwordUtils.verifyPassword as jest.Mock).mockResolvedValue(true);
      (tokenUtils.generateAccessToken as jest.Mock).mockReturnValue(
        "mockToken",
      );

      const res = await request(app).post("/login").send({
        username: "john",
        password: "plaintext",
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toBe("mockToken");
    });

    it("should return 401 on invalid password", async () => {
      const mockUser = {
        username: "john",
        password: "hashedpass",
        role: "user",
      };

      (userModel.findUserByUsername as jest.Mock).mockReturnValue(mockUser);
      (passwordUtils.verifyPassword as jest.Mock).mockResolvedValue(false);

      const res = await request(app).post("/login").send({
        username: "john",
        password: "wrongpass",
      });

      expect(res.statusCode).toBe(401);
      expect(res.body).toBe("Invalid username or password");
    });

    it("should return 401 on non-existent user", async () => {
      (userModel.findUserByUsername as jest.Mock).mockReturnValue(undefined);

      const res = await request(app).post("/login").send({
        username: "ghost",
        password: "whatever",
      });

      expect(res.statusCode).toBe(401);
      expect(res.body).toBe("Invalid username or password");
    });
  });

  describe("POST /signup", () => {
    it("should return token on successful signup", async () => {
      (bcrypt.hash as jest.Mock).mockResolvedValue("hashedPassword");
      (tokenUtils.generateAccessToken as jest.Mock).mockReturnValue(
        "signupToken",
      );

      const res = await request(app).post("/signup").send({
        username: "newuser",
        password: "pass123",
        email: "test@test.com",
        role: "user",
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toBe("signupToken");
    });
  });
});
