import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to this project");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
