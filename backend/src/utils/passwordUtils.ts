import bcrypt from "bcrypt";

export const verifyPassword = async (
  plaintextPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(plaintextPassword, hashedPassword);
};
