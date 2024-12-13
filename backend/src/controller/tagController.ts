import tagModel from "../db/tagSchema";

type Tag = {
  title: string;
};
export async function createTag(title: string) {
  try {
    await tagModel.create({
      title,
    });
    return true;
  } catch (error) {
    return false;
  }
}

export async function getOneTag(title: string): Promise<Tag | null> {
  return tagModel.findOne({ title });
}

export async function getAllTags(): Promise<Tag[]> {
  return tagModel.find();
}
