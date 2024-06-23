import { config } from "dotenv";
config();
export const database = process.env.DATABASE
export const database_user = process.env.DATABASE_USER
export const database_password = process.env.DATABASE_PASSWORD;
export const jwt_secret = process.env.JWT_SECRET;
export const port = process.env.PORT