import express from "express";
import pg from "pg";

const router = express.Router(); // Define the router

// PostgreSQL client setup
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "raiyyanp",
  port: 5433,
});

// Connect to the database
db.connect().catch((err) => console.error("Failed to connect to the database", err));

// Handle login route
router.post("/register", async (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
  
    try {
      const checkResult = await db.query("SELECT * FROM usersauthlv1 WHERE email = $1", [
        email,
      ]);
  
      if (checkResult.rows.length > 0) {
        res.send("Email already exists. Try logging in.");
      } else {
        const result = await db.query(
          "INSERT INTO usersauthlv1 (email, password) VALUES ($1, $2)",
          [email, password]
        );
        console.log(result);
        res.send("Registration successful");
      }
    } catch (err) {
      console.log(err);
    }
  });

export default router; // Export the router for inclusion in the main app
