import express from "express";
import dotenv from "dotenv";
import pool from "./src/config/db.js";
import departmentRoutes from "./src/routes/departmentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use("/api/departments", departmentRoutes);

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
