import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import cors from "cors";

config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "PATCH"],
  }),
);

app.get("/", (req, res) => {
  res.send("welcome to this project");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", usersRouter);

app.listen(8001, () => {
  console.log("Server is running on port 8001");
});
