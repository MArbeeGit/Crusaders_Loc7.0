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
router.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    // Query the database to find the user by email
    const result = await db.query("SELECT * FROM usersauthlv1 WHERE email = $1", [
      email,
    ]);
    
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      // Compare the passwords
      if (password === storedPassword) {
        res.status(200).send("Login successful");
      } else {
        res.status(401).send("Incorrect password");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Internal server error");
  }
});
export default router; // Export the router for inclusion in the main app
