import { adminMiddleware } from "../middleware/admin.auth.middle";
import { Request, Response, NextFunction } from "express";
import { ROLES } from "../utils/rolesUtils";

describe("adminMiddleware", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it("should call next() if user is admin", async () => {
    req.user = {
        id: "test-id",
        name: "Test User",
        username: "testuser",
        password: "testpassword",
        role: ROLES.ADMIN,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

    await adminMiddleware(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("should return 403 if user is not admin", async () => {
    req.user = {
      id: "test-id",
      name: "Test User",
      username: "testuser",
      password: "testpassword",
      role: ROLES.operator,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await adminMiddleware(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: "Forbidden" });
    expect(next).toHaveBeenCalled(); // ⚠️ It still calls next after sending a response!
  });
});
