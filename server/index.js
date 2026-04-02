import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import schoolRoutes from "./routes/schoolRoutes.js";
import filterRoutes from "./routes/filterRoutes.js";

dotenv.config();

const app = express();

// ✅ Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middleware
app.use(express.json());

// ✅ CORS (DEV + PROD)
const allowedOrigins = [
  "http://localhost:5173", // dev
  "https://schoolato-main.onrender.com", // prod
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Routes
app.use("/api", schoolRoutes);
app.use("/api", filterRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// ✅ Start server AFTER DB connects
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  }
};

startServer();