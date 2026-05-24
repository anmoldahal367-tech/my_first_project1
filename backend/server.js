const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/user", (req, res) => {
  const { name } = req.body;

  res.json({
    message: `Hello ${name}, data received successfully!`,
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});