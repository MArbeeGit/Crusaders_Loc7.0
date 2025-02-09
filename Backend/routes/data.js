import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// PostgreSQL client setup with environment variables
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "raiyyanp",
  port: 5433,
});


// Connect to the database
db.connect().catch((err) => console.error("Database connection failed", err));

// GET all expenses
router.get("/expenses", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM expenses ORDER BY date DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new expense
router.post("/expenses", async (req, res) => {
  try {
    const { amount, date, description, category } = req.body;
    
    // Input validation
    if (!amount || !date || !description || !category) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await db.query(
      "INSERT INTO expenses (amount, date, description, category) VALUES ($1, $2, $3, $4) RETURNING *",
      [Number(amount), date, description, category]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;