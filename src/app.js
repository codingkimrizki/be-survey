import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import questionRoutes from "./routes/questionRoutes.js";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRoutes);

app.get("/", (req, res) => {
  res.send("Express jalan cuy!");
});

export default app;
