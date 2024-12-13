import mongoose from "mongoose";

export default function connectToDataBase(url: string) {
  try {
    mongoose.connect(url);
    console.log("successfully connected to database");
  } catch (error) {
    console.log("failed to connect to db with error" + error);
  }
}
