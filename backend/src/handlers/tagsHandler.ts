import { Request, Response } from "express";
import { z } from "zod";
import { createTag, getAllTags, getOneTag } from "../controller/tagController";

const RequestBodySchema = z.object({
  title: z
    .string()
    .max(20, "tag must be less then 20 characters")
    .min(2, "username must be more than 2 characters"),
});

export async function CreateTagHandler(req: Request, res: Response) {
  try {
    RequestBodySchema.parse(req.body);
  } catch (error) {
    return res.status(403).json({ error });
  }
  const title: string = req.body.title;
  try {
    const dbTag = await getOneTag(title);
    if (dbTag) {
      return res.status(400).json({ message: "tag alrady exits" });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }

  const isTagCreated = await createTag(title);
  if (isTagCreated) {
    return res.status(200).json({ message: "tag Saved" });
  } else {
    return res.status(404).json({ message: "not saved" });
  }
}

export async function GetAllTagsHandler(req: Request, res: Response) {
  try {
    const tags = await getAllTags();
    return res.status(200).json({ tags });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
}
