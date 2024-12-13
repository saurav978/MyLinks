import ContentModel from "../db/contentSchema";
import tagModel from "../db/tagSchema";

export async function createContent(
  link: string,
  type: string,
  title: string,
  userId: string,
  tags: string[]
): Promise<boolean> {
  try {
    const dbtags = await tagModel.find({ title: { $in: tags } });
    const tagIds = dbtags.map((ele) => ele._id);
    await ContentModel.create({
      link,
      type,
      title,
      dbtags,
      tags: tagIds,
      userId,
    });
    return true;
  } catch (error) {
    return false;
  }
}

export async function getAllContent(userId: string) {
  return await ContentModel.find({ userId: userId });
}

export async function deleteContent(contentId: string, userId: string) {
  try {
    ContentModel.deleteMany({
      contentId,
      userId: userId,
    });
    return true;
  } catch (error) {
    return false;
  }
}
