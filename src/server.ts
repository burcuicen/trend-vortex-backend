import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
const bodyParser = require("body-parser");
import { swaggerDocs } from "./swagger-config";

import googleTrends from "./routes/google-trends-routes";
import authRoutes from "./routes/auth-routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type, Authorization");

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", googleTrends);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Trend Vortex API");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});

