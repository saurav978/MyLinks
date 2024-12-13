import env from "dotenv";
env.config();

export const PORT = process.env.PORT || 3000;
export const MONGOURL = process.env.MONGOURL;
export const JWT_PASSWORD = process.env.JWT_PASSWORD;
