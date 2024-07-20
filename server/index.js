import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";

config();

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to this project");
});

app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(8001, () => {
  console.log("Server is running on port 8001");
});
