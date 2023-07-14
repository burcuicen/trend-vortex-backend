import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const path = require("path");

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
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Trend Vortex API",
      version: "1.0.0",
      description: "Trend Vortex API",
      contact: {
        name: "Burcu İçen",
      },
    },
    servers: [
      {
        url: "http://localhost:3000" || process.env.BASE_URL,
      },
    ],
  },
  apis: ["./dist/routes/google-trends-routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", googleTrends);

app.get("/", (req, res) => {
  res.send("Trend Vortex API");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});

