import { Router } from "express";
import signupHandler from "../handlers/signupHandler";
import signinHandler from "../handlers/signinHandler";

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  await signupHandler(req, res);
});

authRouter.post("/signin", async (req, res) => {
  await signinHandler(req, res);
});

export default authRouter;
