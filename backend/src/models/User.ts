import { readFileSync } from "fs";
import path from "path";

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const findUserByEmail = (email: string): User | undefined => {
  const filePath = path.join(__dirname, "../../data/users.json");
  const fileData = readFileSync(filePath, "utf-8");
  const users: User[] = JSON.parse(fileData);

  return users.find((user) => user.email === email);
};
