import { Schema, Types, model } from "mongoose";

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: Types.ObjectId, ref: "Tag" }],
  type: String,
  userId: { type: Types.ObjectId, ref: "User", required: true },
});

const ContentModel = model("Content", ContentSchema);
export default ContentModel;
