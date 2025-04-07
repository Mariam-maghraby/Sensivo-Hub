import jwt from "jsonwebtoken";

export function generateAccessToken(email: object): string {
  const tokenSecret = process.env.TOKEN_SECRET as string;
  return jwt.sign(email, tokenSecret, { expiresIn: "30m" }); //token exires after 30 minutes
}
