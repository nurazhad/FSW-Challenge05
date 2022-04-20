import express from "express";
const app = express();
import carRoute from "./Routes/carRoute.js"
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import multer from "multer";

const URL =
  "mongodb://admin:nanurahman@cluster0-shard-00-00.sbgae.mongodb.net:27017,cluster0-shard-00-01.sbgae.mongodb.net:27017,cluster0-shard-00-02.sbgae.mongodb.net:27017/binarAcademy?ssl=true&replicaSet=atlas-a8dmk7-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = 8080
// const URL = "mongodb://localhost:27017";
mongoose.connect(
  URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));

app.use(cors());
app.use(express.json());
app.use(carRoute);

app.listen(PORT, () => console.log("Server Running"));

const Storage = multer.diskStorage({
  destination:'./Uploads',
  filename:(req, file, cb) => {
    cb(null, file.originalname);
  }, 
})

const upload = multer({
  storage:Storage
}).single('image')

export default upload