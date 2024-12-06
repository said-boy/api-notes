import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import router from "./routes/routes.js";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});