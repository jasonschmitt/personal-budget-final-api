import express from "express";

const app = express();
const PORT = 8081;

app.get("/", (req, res) => {
  res.send(`hi on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
