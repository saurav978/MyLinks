import { Router } from "express";
import {
  createContentHandler,
  deleteContentHandler,
  getUserAllContentHandler,
} from "../handlers/contentHandler";
import { userMiddleware } from "../middlewares/userMiddleware";

const contentRouter = Router();

contentRouter.get("/content", userMiddleware, (req, res) => {
  getUserAllContentHandler(req, res);
});

contentRouter.post("/content", userMiddleware, (req, res) => {
  createContentHandler(req, res);
});

contentRouter.delete("/content", userMiddleware, (req, res) => {
  deleteContentHandler(req, res);
});

export default contentRouter;
