import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import usersRouter from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";
import questionsRouter from "./routes/questions.routes.js";
import cors from "cors";

config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("welcome to this project");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/questions", questionsRouter);

app.listen(8001, () => {
  console.log("Server is running on port 8001");
});
