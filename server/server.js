const express = require('express');

const app = express();

app.get("/api", (req, res) => {
  res.json({ "Project name": "CYF Product" });
});

app.listen(3001, () => {console.log("Server started on port 3001");})