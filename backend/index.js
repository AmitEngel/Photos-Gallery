import express from "express";
import cors from "cors";
import { config } from "dotenv";
import {photosRouter} from "./routes/photos.mjs";

config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/api", photosRouter);

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
