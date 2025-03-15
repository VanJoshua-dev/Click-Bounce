require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const jwt = require("jsonwebtoken");

//use imports
const app = express();
app.use(cors());
app.use(express.json());

// database connection
let conn; // Declare the connection variable

async function connectDB() {
    try {
        conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            ssl: { rejectUnauthorized: true }
        });

        console.log("Connected to the database");
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

// Call the function to establish the connection
connectDB();

// routes
app.get("/api/test-db", async (req, res) => {
    try {
        const [results] = await conn.query("SELECT NOW() AS currentTime");

        res.json({ message: "Database connected successfully!", results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/', async (req, res) => {
    res.send("<h1 style='color: green; width: 100%; height: 70vh; text-align: center; font-size: 5rem; display: flex; justify-content: center; align-items: center; '>Server is Running...</h1>");
    
});


app.post("/api/login", async (req, res) => { // FIXED ORDER: (req, res)
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and Password are required" });
    }

    if (username === "test" && password === "testpass") {
        return res.json({ success: true, message: "Login Successfully" });
    } else {
        return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});