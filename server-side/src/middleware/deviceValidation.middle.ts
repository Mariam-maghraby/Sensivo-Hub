import { body, param } from "express-validator";

export const validateId = [
  param("id").isMongoId().withMessage("Id is not valid"),
];
