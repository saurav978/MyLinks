import { Request, Response } from "express";
import z from "zod";
import { customRequest } from "../types/customExpressTypes";
import { random } from "../utils";
import linkModel from "../db/linkSchema";
import ContentModel from "../db/contentSchema";
import userModel from "../db/userSchema";

const ShareSchema = z.object({
  shear: z.boolean(),
});

export async function ShareHandler(req: customRequest, res: Response) {
  try {
    ShareSchema.parse(req.body);
  } catch (error) {
    return res.status(403).json({ message: "send a valid body" });
  }
  const share = req.body.share;

  if (share) {
    const existingLink = await linkModel.findOne({
      userId: req.userId,
    });

    if (existingLink) {
      res.json({
        hash: existingLink.hash,
      });
      return;
    }
    const hash = random(10);
    await linkModel.create({
      userId: req.userId,
      hash: hash,
    });

    res.json({
      hash,
    });
  } else {
    await linkModel.deleteOne({
      userId: req.userId,
    });

    res.json({
      message: "Removed link",
    });
  }
}

export async function ShareContentHandler(req: Request, res: Response) {
  const hash = req.params.shareLink;

  const link = await linkModel.findOne({
    hash,
  });

  if (!link) {
    res.status(411).json({
      message: "Sorry incorrect input",
    });
    return;
  }
  // userId
  const content = await ContentModel.find({
    userId: link.userId,
  });

  console.log(link);
  const user = await userModel.findOne({
    _id: link.userId,
  });

  if (!user) {
    res.status(411).json({
      message: "user not found, error should ideally not happen",
    });
    return;
  }

  res.json({
    username: user.username,
    content: content,
  });
}
