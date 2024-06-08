import express from "express";
import sequelize from "./utils/database.js";
import Data from "./model/data.js";
import cors from "cors";
import dataRouter from "./routes/data.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(
  "mongodb+srv://dineshbalansrinivasan:2AYvizYkJZKD51DO@cluster0.glmho0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const app = express();

app.use(cors());
app.use(express.json());

sequelize.sync().catch((err) => {
  console.log(err);
});

app.use("/api", dataRouter);


console.log(process.cwd() + "/build");

app.use(express.static(path.join(__dirname, "./build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

// app.use(express.static(path.join(process.cwd(), "/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(process.cwd(), "/build/index.html"));
// });
