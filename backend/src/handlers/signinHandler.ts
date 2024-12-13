import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByUsername } from "../controller/userController";
import { JWT_PASSWORD } from "../constants";

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

export default async function signinHandler(req: Request, res: Response) {
  //for zod validation
  try {
    RequestBodySchema.parse(req.body);
  } catch (error) {
    return res.status(403).json({ error: error });
  }

  const user: UserType = req.body;

  try {
    const dbUser = await findUserByUsername(user.username);
    if (!dbUser) {
      return res.status(403).json({
        message: "Incorrrect credentials",
      });
    }
    const checkPassword = await bcrypt.compare(user.password, dbUser.password);
    if (checkPassword) {
      const token = jwt.sign({ id: dbUser._id }, JWT_PASSWORD as string);
      res.json({
        token,
      });
    }
  } catch (error) {}
}
