const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Test server is working" });
});

app.get("/auth", (req, res) => {
  res.json({ message: "Auth endpoint would be here" });
});

app.get("/callback", (req, res) => {
  res.json({ message: "Callback endpoint would be here" });
});

app.listen(PORT, () => {{
  console.log("Server running on port " + PORT);
  console.log("Test endpoint: http://localhost:" + PORT);
}});
