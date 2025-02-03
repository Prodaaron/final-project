require("dotenv").config();
const express = require("express");
const pool = require("../db/db.js"); // adjust path as needed
const router = express.Router();

// POST /newsletter-subscribe
router.post("/newsletter-subscribe", async (req, res) => {
  const { subscriber_name, subscriber_email } = req.body;

  // Basic validation
  if (!subscriber_name || !subscriber_email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    // Insert the new subscriber into the newsletter_subscription table
    const newSubscriber = await pool.query(
      `INSERT INTO newsletter_subscription (subscriber_name, subscriber_email)
       VALUES ($1, $2) RETURNING subscriber_id, subscriber_name, subscriber_email`,
      [subscriber_name, subscriber_email]
    );

    res.status(201).json({
      message: "Congratulations! Subscription Successful!",
      subscriber: newSubscriber.rows[0],
    });
  } catch (error) {
    // Check for unique constraint violation (email already subscribed)
    if (error.code === "23505") {
      return res.status(400).json({ error: "Email already subscribed" });
    }
    res.status(500).json({ error: error.message });
  }
});

router.get("/subscribers", async (req, res) => {
  try {
    console.log('hello');
    const result = await pool.query("SELECT * FROM newsletter_subscription ORDER BY subscriber_id DESC");
    console.log(result);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;