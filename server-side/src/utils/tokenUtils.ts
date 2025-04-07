import jwt from "jsonwebtoken";

export function generateAccessToken(data:{
  username: string;
  role: string;
}): string {
  const tokenSecret = process.env.TOKEN_SECRET as string;
  return jwt.sign(data, tokenSecret, { expiresIn: "30m" }); //token exires after 30 minutes
}
