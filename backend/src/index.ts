import express from "express";
import { MONGOURL, PORT } from "./constants";
import connectToDataBase from "./db/dbConnect";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import tagRouter from "./routes/tagsRouts";
import contentRouter from "./routes/contentRouters";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", authRouter);
app.use("/api/v1", tagRouter);
app.use("/api/v1", contentRouter);

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
  connectToDataBase(MONGOURL as string);
});
