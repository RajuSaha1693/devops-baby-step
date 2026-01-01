const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello v2 from versioned deployment 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, "0.0.0.0", () => console.log("App running on port 3000"));
