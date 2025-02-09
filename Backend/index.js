import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// Import route modules
import authRouter from "./routes/auth.js";
import regRouter from "./routes/reg.js";
import dataRouter from "./routes/data.js";

// Load environment variables
dotenv.config();

const app = express();
const port =3000;

// CORS configuration
app.use(cors({
  origin: '*', // Adjust in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware for parsing requests
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// Serve static files
app.use(express.static("public"));

// Route mounting
app.use("/api/auth", authRouter);
app.use("/api/auth", regRouter);
app.use("/api/", dataRouter);

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;