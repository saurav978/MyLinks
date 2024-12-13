import { Schema, Types, model } from "mongoose";

const LinkSchema = new Schema({
  hash: String,
  userId: { type: Types.ObjectId, ref: "User", required: true, unique: true },
});

const linkModel = model("Links", LinkSchema);
export default linkModel;
