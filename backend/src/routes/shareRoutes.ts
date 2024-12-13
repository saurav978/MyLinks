import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { ShareContentHandler, ShareHandler } from "../handlers/shareHandler";

const shareRouter = Router();

shareRouter.post("/brain/share", userMiddleware, (req, res) => {
  ShareHandler(req, res);
});

shareRouter.get("/brain:shareLink", (req, res) => {
  ShareContentHandler(req, res);
});

export default shareRouter;
