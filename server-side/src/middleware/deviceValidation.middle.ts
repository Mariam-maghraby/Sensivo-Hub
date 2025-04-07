import { body, param } from "express-validator";

export const validateId = [
  param("id").isNumeric().withMessage("Id is not valid"),
];
