const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const sendBulkEmail = require("./services/mailService");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/passkey")
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log(" Failed to connect to DB"));

// API Route
app.post("/sendemail", sendBulkEmail);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});



