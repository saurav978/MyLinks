import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  title: String,
});

const tagModel = model("Tag", tagSchema);
export default tagModel;
