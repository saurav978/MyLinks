import { Request, Response } from "express";
import z from "zod";
import { customRequest } from "../types/customExpressTypes";
import {
  createContent,
  deleteContent,
  getAllContent,
} from "../controller/contentController";

const zodContentSchema = z.object({
  title: z
    .string()
    .max(20, "title must be less then 20 characters")
    .min(2, "title must be more than 2 characters"),
  link: z.string(),
  tags: z.array(z.string()),
  type: z.string(),
});

type zodContentSchemaType = z.infer<typeof zodContentSchema>;

export async function createContentHandler(req: customRequest, res: Response) {
  try {
    zodContentSchema.parse(req.body);
  } catch (error) {
    return res.status(404).json({ error });
  }
  const body: zodContentSchemaType = req.body;
  const { link, tags, title, type } = body;
  const userId = req.userId;
  const isSaved = await createContent(
    link,
    type,
    title,
    userId as string,
    tags
  );
  if (isSaved) {
    return res.status(200).json({ message: "saved" });
  } else {
    return res.status(500).json({ message: "Inernal server error" });
  }
}

export async function getUserAllContentHandler(
  req: customRequest,
  res: Response
) {
  const userId = req.userId;
  try {
    const content = await getAllContent(userId as string);
    return res.status(200).json({ content: content });
  } catch (error) {
    return res.status(500).json({ message: "Inernal server error" });
  }
}
const deleteBodySchema = z.object({
  contentId: z.string(),
});
export async function deleteContentHandler(req: customRequest, res: Response) {
  try {
    deleteBodySchema.parse(req.body);
  } catch (error) {
    return res.status(403).json({ message: "send a valid content Id" });
  }
  const userId = req.userId;
  const contentId = req.body.contentId;
  const isDeleted = await deleteContent(contentId, userId as string);
  if (isDeleted) {
    return res.status(200).json({ message: "deleted" });
  } else {
    return res.status(500).json({ message: "internal server error" });
  }
}
