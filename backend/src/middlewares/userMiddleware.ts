import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "../constants";
import { customRequest } from "../types/customExpressTypes";

export const userMiddleware = (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];
  const decoded = jwt.verify(header as string, JWT_PASSWORD as string);
  if (decoded) {
    if (typeof decoded === "string") {
      res.status(403).json({
        message: "You are not logged in",
      });
      return;
    }
    req.userId = (decoded as JwtPayload).id;
    next();
  } else {
    res.status(403).json({
      message: "You are not logged in",
    });
  }
};
