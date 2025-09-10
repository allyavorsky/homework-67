const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("<h1>Express-сервер в Docker</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
