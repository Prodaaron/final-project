require("dotenv").config();
const express = require("express");
const pool = require("../db/db.js"); // adjust path as needed
const app = express();

app.use(express.json());

app.get("/products", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY product_id ASC');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = app;