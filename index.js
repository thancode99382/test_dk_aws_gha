// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express + Docker + GitHub Actions + EC2 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));