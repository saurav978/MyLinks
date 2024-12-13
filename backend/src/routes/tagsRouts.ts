import { Router } from "express";
import { CreateTagHandler, GetAllTagsHandler } from "../handlers/tagsHandler";
import { userMiddleware } from "../middlewares/userMiddleware";

const tagRouter = Router();

tagRouter.post("/tag", userMiddleware, async (req, res) => {
  await CreateTagHandler(req, res);
});
tagRouter.get("/tag", userMiddleware, async (req, res) => {
  await GetAllTagsHandler(req, res);
});
tagRouter.delete("/tag", (req, res) => {});

export default tagRouter;
