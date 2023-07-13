import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import googleTrends from "./routes/google-trends-routes";
dotenv.config();

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  next();
});
const mongodbUri = process.env.MONGODB_URI;
if (mongodbUri) {
  mongoose
    .connect(mongodbUri, {})
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error(error);
    });
} else {
  console.error("MONGODB_URI environment variable not defined");
}

app.use("/api", googleTrends);

app.get("/", (req, res) => {
  res.send("Trend Vortex API");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});

