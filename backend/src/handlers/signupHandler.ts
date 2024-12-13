import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import { findUserByUsername, saveUser } from "../controller/userController";

const RequestBodySchema = z.object({
  username: z
    .string()
    .max(20, "username must be less then 20 characters")
    .min(2, "username must be more than 2 characters"),
  password: z
    .string()
    .max(30, "password must be less then 20 characters")
    .min(8, "password must be more than 8 characters"),
});
type UserType = z.infer<typeof RequestBodySchema>;

export default async function signupHandler(req: Request, res: Response) {
  try {
    RequestBodySchema.parse(req.body);
  } catch (error) {
    return res.status(403).json({ error: error });
  }
  const user: UserType = req.body;

  try {
    const dbUser = await findUserByUsername(user.username);
    if (dbUser) {
      return res.status(411).json({
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password, salt);
    await saveUser(user.username, hashPassword);
    return res.status(200).json({ message: "shinup complited" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
