const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const sendBulkEmail = require("./services/mailService");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://srilatha:123@cluster0.2ar1omf.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

app.post("/sendemail", sendBulkEmail);

// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});




