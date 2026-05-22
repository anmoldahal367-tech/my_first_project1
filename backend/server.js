const express = require("express");

const app = express();

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from backend server 🚀"
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});