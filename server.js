import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/config/db.js";
import departmentRoutes from "./src/routes/departmentRoutes.js";
import biodataRoutes from "./src/routes/biodataRoutes.js";
import appsRoutes from "./src/routes/appsRoutes.js";
import masterApps from "./src/routes/masterAppsRoutes.js";
import answers from "./src/routes/answersRoutes.js";
import pages from "./src/routes/pageRoutes.js";
import questions from "./src/routes/questionRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/departments", departmentRoutes);
app.use("/api/biodatas", biodataRoutes);
app.use("/api/apps", appsRoutes);
app.use("/api/masterApps", masterApps);
app.use("/api/answers", answers);
app.use("/api/pages", pages);
app.use("/api/questions", questions);


// connect ke MySQL
pool.getConnection()
  .then((connection) => {
    console.log("MySQL connected!");
    connection.release();
  })
  .catch((err) => {
    console.error("MySQL connection failed:", err.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
