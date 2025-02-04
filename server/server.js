const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { router: authRoutes } = require("./routes/auth"); // existing auth routes
const newsletterRoutes = require("./routes/newsletter");  // import your newsletter route
const productRoutes = require("./routes/products"); // import your product route
const router = express.Router();



const app = express();



app.use(express.json());
app.use(cors());

// Use your routes
app.use("/auth", authRoutes);
app.use("/", newsletterRoutes); // This will add the /newsletter-subscribe endpoint
app.use("/subscribers", newsletterRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));