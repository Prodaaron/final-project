const express = require("express");
const cors = require("cors");
const { router: authRoutes } = require("./routes/auth");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes); // Use auth routes

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));