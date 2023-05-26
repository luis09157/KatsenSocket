import { config } from "dotenv";

config();

export default {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "katsenbd",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || ""
};
